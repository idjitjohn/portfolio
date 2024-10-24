import React from 'react'
import clsx from 'clsx'
import './Stack.scss'

const Stack = props => {
  const {icon, name, level = 6} = props
  return (
    <div style={{'--icon': `url(${icon})`}} className={clsx('Stack')}>
      <div className="atright">
      <span>{name}</span>
        <div className="stars">
          {
            [1,2,3,4,5,6].map((nb, key) => {
              return <div key={key} className={clsx("star", nb > level && 'future')}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Stack