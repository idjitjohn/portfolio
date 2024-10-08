import React, { useCallback } from 'react'
import './Hall.scss'
import { useRecoilValue } from 'recoil'
import { langState } from '../../../atoms'
import { getText } from '../../../data/langs'
import SnowFall from '../SnowFall'

const Hall = () => {
  const {value} = useRecoilValue(langState)
  const text = useCallback((key) => getText(key, value), [value])
  return (
    <>
       <div className="Hall">
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
                <div className="stack more button"></div>
              </div>
              <div className="contact">
                <button className="contact-button button">{text('contactme')}</button>
                <div className="socials">
                  <a href="https://www.linkedin.com/in/marsonlj" target='_blank' className="linkedin"></a>
                  <a href='https://github.com/idjitjohn' target='_blank' className="github"></a>
                  <a href='' target='_blank' className="twitter"></a>
                </div>
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
      <SnowFall/>
    </>
  )
}
export default Hall