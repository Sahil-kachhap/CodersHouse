import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'
import Button from '../../../components/shared/Button/Button'

const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState('');
  function next(){}
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock">
           <TextInput value={otp} onChange={(e) => setOtp(e.target.value)}/>
           <div className={styles.actionButtonWrap}>
             <Button onClick={next}>Next</Button>
           </div>
           <p className={styles.bottomParagraph}>
             By entering your number, you're agreeing to our Terms of Service and Privacy 
             Policy. Thanks!
           </p>
        </Card>
      </div>
    </>
  )
}

export default StepOtp