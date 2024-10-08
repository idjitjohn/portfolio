import React, { useEffect } from 'react'
import './Project.scss'
import xps from '../../../data/xps'
import { allStacks } from '../../../data/stacks'



const Project = () => {
  const xp = xps.fr[24]
  return (
    <div
      className='Project'
      style={{
        '--image': `url(${xp.image})`,
        '--logo': `url(${xp.logo})`,
        '--color': xp.color
      }}
    >
      <div className="p-left"/>
      <div className="p-right">
      <div className="company">
        <span>{xp.company}</span>
      </div>
        <div className="title">{xp.title || ""}</div>
        <div className="description">
          <div className="desc">{xp.mission}</div>
          {
            xp.tasks.map(task => {
              return <div className="task">{task}</div>
            })
          }
        </div>
        <div className="stacks">
          {
            xp.techs.split(', ').map(tech => {
              const stack = allStacks.find(item => (item.desc || item.name).toLocaleLowerCase().includes(tech.toLocaleLowerCase()))
              return stack ? <div
                style={{
                  backgroundImage: `url(${stack.icon})`
                }}
                className="stack" 
                title={stack.name}
              /> : <div
                style={{
                  // backgroundImage: `url(${stack.icon})`
                }}
                className="stack"
                title={tech}
              >{tech}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Project