import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Home.scss'
import Header from '../../components/Header'
import Hall from '../../components/Hall'

const Home = () => {
  return (
    <div className={clsx('Home')}>
      <Header/>
      <Hall/>
    </div>
  )
}
export default Home