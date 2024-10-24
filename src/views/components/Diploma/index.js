import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Diploma.scss'

const Diploma = props => {
  const {year, name, description, details} = props
  return (
    <div className={clsx('Diploma')}>
      <div className="year">{year}</div>
      <div className="name">{name}</div>
      <div className="desc">{description}</div>

    </div>
  )
}
export default Diploma