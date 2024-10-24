import React from 'react'
import './Project.scss'
import { allStacks } from '../../../data/stacks'



const Project = ({xp}) => {
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
            xp.tasks.map((task, i) => {
              return <div key={task.start + i} className="task">{task}</div>
            })
          }
        </div>
        <div className="stacks">
          {
            xp.techs.split(', ').map(tech => {
              const stack = allStacks.find(item => (item.desc || item.name).toLocaleLowerCase().includes(tech.toLocaleLowerCase()))
              return stack ? <div
                key={stack.name}
                style={{
                  backgroundImage: `url(${stack.icon})`
                }}
                className="stack" 
                title={stack.name}
              /> : <div
                key={stack.name}
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