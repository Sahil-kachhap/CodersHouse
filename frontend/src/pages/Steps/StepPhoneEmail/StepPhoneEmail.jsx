import React,{useState} from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './Phone/StepPhoneEmail.module.css'

const PhoneEmailMap = {
   phone: Phone,
   email: Email,
}

const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = PhoneEmailMap[type];

  return (
    <>
        <div className={styles.cardWrapper}>
          <div>
           <div className={styles.buttonWrap}>
              <button className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`} onClick={() => setType('phone')}>
                <img src='/images/phone-white.png' alt='phone'/>
              </button>
              <button className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`} onClick={() => setType('email')}>
                <img src='/images/email-white.png' alt='email'/>
              </button>
           </div>
           <Component onNext={onNext} />
           </div>
        </div>
    </>
  );
}

export default StepPhoneEmail