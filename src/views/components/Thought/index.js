import React, { useEffect, useRef, useState } from 'react'
import './Thought.scss'
import { Link } from 'react-router-dom'

const Thought = () => {
  const ref = useRef()
  const target = useRef()
  const [year, setYear] = useState("")
  useEffect(() => {
    const show = (e) => {
      target.current = e?.target || target.current
      if(target.current.closest('.menu-item.pro')){
        setYear(target.current.closest('.menu-item.pro').innerText)
        const {y, height} = target.current.getBoundingClientRect()
        const t = ref.current
        t.style.setProperty('--ty', `${y + height / 2 }px`)
        setTimeout(() => show(), 1000)
        if(e?.target){
          ref.current?.querySelector('.message').focus()
        }
      }
    }
    document.addEventListener('click', show)
    return () => document.removeEventListener('click', show)
  }, [])
  return (
    <div ref={ref} className='Thought'>
      <div className="bubbles">
        <div className="b1"/>
        <div className="b2"/>
        <div className="b3"/>
      </div>
      <div className="message" tabIndex={1}>
        <span>
          Vous savez quoi? <span className='strong'>Nous allons travailler sur votre projet d'abord 😉</span>
        </span>
        <Link to="/resume">
          <div className="resume">Allons voir mon CV</div>
        </Link>
        <div className="mini">PS: Je remplirai cette section "{year}" plus tard.</div>
      </div>
    </div>
  )
}

export default Thought