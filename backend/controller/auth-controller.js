const hashService = require('../services/hash-service');
const otpService = require('../services/otp-service');
const tokenService = require('../services/token-service');
const userService = require('../services/user-service');

class AuthController{
    async sendOtp(req, res){
        const {phone} = req.body;
        if(!phone){
            res.status(400).json({message: 'Phone field is required!'});
        }

        const otp = await otpService.generateOtp();
        
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        try{
            await otpService.sendBySms(phone, otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone,
            });
        }catch(err){
            console.log(err);
            res.status(500).json({message: 'message sending failed'});
        }
    }

    async verifyOtp(req, res){
        const {otp, hash, phone} = req.body;
        if(!otp || !hash || !phone){
            res.status(400).json({message: 'All fields are required'});
        }

        const [hashedOtp, expires] = hash.split('.');
        if(Date.now() > +expires){
            res.status(400).json({message: 'OTP expired'}); 
        }

        const data = `${phone}.${otp}.${expires}`;

        const isValid = otpService.verifyOtp(hashedOtp, data);
        if(!isValid){
            res.status(400).json({message: 'Invalid OTP'});
        }

        let user, accessToken, refreshToken;

        try {
            user = await userService.findUser({phone});
            if(!user){
                user = await userService.createUser({phone});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'DB error...'});
        }

        tokenService.generateTokens();
    }
}

module.exports = new AuthController();