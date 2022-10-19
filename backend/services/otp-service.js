const crypto = require('crypto');
const hashService = require('./hash-service');
const sid = process.env.SMS_SID;
const authToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(sid, authToken, {
   lazyLoading: true
});

class OtpService{
  generateOtp(){
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone, otp){
    return twilio.messages.create({
      to: phone,
      from: process.env.SMS_FROM_NUMBER,
      body:  `Your CodersHouse OTP is ${otp}`,
    });
  }

  verifyOtp(hashedOtp, data){
    let computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();