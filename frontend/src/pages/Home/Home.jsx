import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }
  return (
   <div className={styles.cardWrapper}>
    <Card title="Welcome to Codershouse!" icon="logo">
    <p className={styles.text}>
        We're working hard to get CodersHouse ready for everyone! While
        we wrap up the finishing touches, we're adding people gradually 
        to make sure nothing breaks. 
      </p>
      <div>
        <Button>Get your username</Button>
      </div>
      <div className={styles.signinWrapper}>
        <span className={styles.hasInvite}>Have an invite text?</span>
        <Link style={signInLinkStyle} to={"/login"}>Sign in</Link>
      </div>
    </Card>
    </div>
  )
}

export default Home
// 45:38