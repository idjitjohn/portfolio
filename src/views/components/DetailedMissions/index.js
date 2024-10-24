import React, { useState, useEffect, useLayoutEffect } from 'react'
import clsx from 'clsx'
import './DetailedMissions.scss'
import xps from '../../../data/xps'
import DMission from '../DMission'
import Page from '../Page'

let TMT = 0

const DetailedMissions = ({lang}) => {
  const [groups, setGroups] = useState([xps[lang]])
  useLayoutEffect(() => {
    // clearTimeout(TMT)
    // TMT = setTimeout(() => {
      const all = Array.from(document.querySelectorAll('.Page:last-child .DetailedMissions .DMission'))
      const index = all.findIndex(dm => dm.offsetTop + dm.offsetHeight > dm.offsetParent.offsetHeight)
      if(index > 0){
        setGroups([
          ...groups.slice(0, groups.length - 1),
          groups[groups.length - 1].slice(0, index),
          groups[groups.length - 1].slice(index)
        ])
      }
    //}, 500)
  }, [groups])
  return <React.Fragment>
    {
      groups.map((group, i) => {
        return <Page key={i} className='with-tree'>
          <div className={clsx('DetailedMissions')}>
            {
              group.map((xp, i) => {
                return <DMission index={i} key={i} {...xp}/>
              })
            }
          </div>
        </Page>
      })
    }
  </React.Fragment>
}
export default DetailedMissions