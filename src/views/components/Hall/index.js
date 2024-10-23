import React, { useCallback, useEffect, useState } from 'react'
import './Hall.scss'
import { useRecoilValue } from 'recoil'
import { langState } from '../../../atoms'
import { getText } from '../../../data/langs'
import SnowFall from '../SnowFall'
import Missions from '../../containers/Missions'
import Contact from '../Contact'
import clsx from 'clsx'

const Hall = () => {
  const {value} = useRecoilValue(langState)
  const text = useCallback((key) => getText(key, value), [value])
  const [mission, setMission] = useState(false)
  useEffect(() => {
    const down = e => {
      console.log(e.key)
      if(e.key.toUpperCase() == 'ESCAPE') setMission(false)
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])
  return (
    <>
       <div className={clsx("Hall", {turned: mission})} style={{opacity: 0}}>
        <div className="presentation">
          <div className="pr pr-left">
            <div>
              <div className="hello">
                <div className="hi">{text('greeting')}</div>
                <div className="prof">{text('title')}</div>
              </div>
              <div className="details">{text('askmission')}</div>
              <div className="stacks sec">
                <div className="stack node "></div>
                <div className="stack next"></div>
                <div className="stack react"></div>
                <div onClick={() => setMission(true)} className="stack more button"></div>
              </div>
            </div>
          </div>
          <div className="pr pr-right">
            <div className="projects">
              <div className="p-proj">{text('bestprojs')}</div>
              <div className="count">{text('numberprojs')}</div>
              <div className="thisyear"><span>+5</span> {text('fornow')}</div>
            </div>
          </div>
        </div>
      </div>
      {<SnowFall active={mission}/>}
      {<Missions active={mission}/>}
      <Contact/>
    </>
  )
}
export default Hall