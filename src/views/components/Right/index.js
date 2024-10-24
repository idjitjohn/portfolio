import React from 'react'
import clsx from 'clsx'
import './Right.scss'
import About from '../About'
import Title from '../Title'
import educs from '../../../data/educations'
import Diploma from '../Diploma'
import Lang from '../Lang'
import allLangs from '../../../data/langs'
import Interest from '../Interest'
import ints from '../../../data/interests'
import xps from '../../../data/xps'
import MissionItem from '../MissionItem'
import stacks from '../../../data/stacks'
import Stack from '../Stack'

const allTitle = {
  fr: ['Education', 'Langues', `Centre d'intérêts`, `Postes & Missions`, `Stacks`],
  en: ['Education', 'Languages', `Center of interest`, `Positions & Missions`, `Stacks`],
}

const Right = ({lang = 'fr'}) => {
  const title = allTitle[lang]
  const interests = ints[lang]
  const educations = educs[lang]
  const langs = allLangs[lang]
  
  return (
    <div className={clsx('Right')}>
      <About lang={lang}/>
      <div className="more-about">
        <div className="parts">
          <div className="Education">
            <Title className='title-education'>{title[0]}</Title>
            {
              educations.map((education, key) => {
                return <Diploma key={key} {...education}/>
              })
            }
          </div>
          <div className="Language">
            <Title className='title-language'>{title[1]}</Title>
            {
              langs.map((lang, key) => {
                return <Lang key={key} {...lang}/>
              })
            }
          </div>
          <div className="Interests">
            <Title className='title-language'>{title[2]}</Title>
            {
              interests.map((interest, key) => {
                return <Interest key={key} {...interest}/>
              })
            }
          </div>
        </div>

        <div className="Missions">
          <Title className='title-mission'>{title[3]}</Title>
          {
            xps[lang].merged.map((xp, key) => {
              return <MissionItem key={key} {...xp}/>
            })
          }
        </div>
      </div>
      <div className="Stacks">
        <Title>{title[4]}</Title>
        <div>
          {
            stacks.langs.map((stack, key) => {
              return <Stack key={key} {...stack}/>
            })
          }
        </div>
        <div>
          {
            [...stacks.frameworks, ...stacks.tools].map((stack, key) => {
              return <Stack key={key} {...stack}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Right