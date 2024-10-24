import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './MissionItem.scss'
import Text from '../Text'

const MissionItem = props => {
  const {
    techs, year, domains
  } = props
  return (
    <div className={clsx('MissionItem')}>
      <div className="start">{year}</div>
      <div className="domain">{domains.join(', ')}</div>
      <div className="techs">{techs.join(', ')}</div>
    </div>
  )
}
export default MissionItem