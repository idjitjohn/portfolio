import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Interest.scss'
import Text from '../Text'

const Interest = props => {
  const {name, image, color} = props

  return (
    <div style={{'--color': color, '--image': `url(${image})`}} className={clsx('Interest')}>
      <div className="name"><Text>{name}</Text></div>
    </div>
  )
}
export default Interest