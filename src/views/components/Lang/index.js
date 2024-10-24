import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './Lang.scss'

const Lang = props => {
  const {name, detail, level} = props
  return (
    <div className={clsx('Lang')}>
      <div className="name">{name}</div>
      <div className="strdetails">
        <div className="stars">
          {
            [1,2,3,4,5,6].map((nb, key) => {
              return <div key={key} className={clsx("star", nb > level && 'future')}/>
            })
          }
        </div>
        <div className="detail">{detail}</div>
      </div>
    </div>
  )
}
export default Lang