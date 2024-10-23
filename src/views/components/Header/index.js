import React, { useEffect, useMemo } from 'react'
import './Header.scss'
import { useRecoilValue } from 'recoil'
import { langState } from '../../../atoms'
import { useState } from 'react'
import clsx from 'clsx'
import Thought from '../Thought'


const curYear = new Date().getFullYear()

const Header = () => {
  const [years, setYears] = useState([])
  const [page, setPage] = useState(0)
  const {value} = useRecoilValue(langState)
  useEffect(() => {
    const items = []
    for(let i = 2017; i <= curYear; i++) items.push(i)
    setYears(items.reverse())
  }, [])
  return (
    <header className="Header">
      <div className="name notranslate">
        <div>{value === 'xt' ? "⋔⏃⍀⌇⍜⋏" : "Marson"}</div>
        <div className="last">{value === 'xt' ? "⌰⏃⋉⏃" : "LAZA"}</div>
      </div>
      <div className="menu">
        <div
          className={clsx("up", {active: page > 0})}
          onClick={() => setPage(p => p - 1)}
        />
        <div className="items" >
          <div style={{'--page': page}} className="items-container">
            {
              years.map(year => {
                return <div style={{'--year': `"${year}"`}} key={year} className="menu-item pro">
                  <span className="year">{year}</span>
                </div>
              })
            }
          </div>
        </div>
        <div
          className={clsx("menu-item down", {active: page < years.length - 3})}
          onClick={() => setPage(p => p + 1)}
        />
      </div>
      <Thought/>
    </header>
  )
}
export default Header