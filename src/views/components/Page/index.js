import React from 'react'
import clsx from 'clsx'
import './Page.scss'

const Page = props => {
  return (
    <div className={clsx('Page', props.className)}>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}
export default Page