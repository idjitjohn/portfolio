import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Login.scss'

const Login = () => {
  return (
    <div className={clsx('Login')}>
      <div className="side">
        <input placeholder='Login' type="email" />
        <input placeholder='Password' type="password" />
        <button className='login-button'>Se connecter</button>
      </div>
    </div>
  )
}
export default Login