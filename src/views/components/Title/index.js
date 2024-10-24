import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Title.scss'

const Title = props => {
  return (
    <div className={clsx('Title')}>
      {props.children}
    </div>
  )
}
export default Title