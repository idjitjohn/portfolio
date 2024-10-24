import React from 'react'
import clsx from 'clsx'
import './DMission.scss'
import { basicFormatDate } from '../../../services/functions'


const toStart = start => {
  return start.split(' ').map((val, i) => {
    if(i == 0) return val
    else return basicFormatDate.monthNames.fr[parseInt(val) - 1]
  }).reverse().join(' ')

  
}

const DMission = props => {
  const {
    role, start, company, domain,
    mission, techs, tasks, index
  } = props

  return (
    <div data-index={index} className={clsx('DMission')}>
      <div className="start">{toStart(start)}</div>
      <div className="place">
        <span className="role">{role}</span>
        <span className="domain">{domain}</span>
        <span className="company">{company}</span>
      </div>
      <div className="mission">{mission}</div>
      <ul className="tasks">
        {
          tasks.map((task, i) => {
            return <li key={i} className="task">{task}</li>
          })
        }
      </ul>
      <div className="techs">{techs}</div>
    </div>
  )
}
export default DMission