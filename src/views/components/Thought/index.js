import React, { useEffect, useRef } from 'react'
import './Thought.scss'

const Thought = () => {
  const ref = useRef()
  const target = useRef()
  useEffect(() => {
    const show = (e) => {
      target.current = e?.target || target.current
      if(target.current.closest('.menu-item.pro')){
        const {y, height} = target.current.getBoundingClientRect()
        const t = ref.current
        t.style.setProperty('--ty', `${y + height / 2 }px`)
        setTimeout(() => show(), 1000)
        if(e.target){
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
        Vous savez quoi? Nous remplirons cette section plus tard. Nous allons travailler sur votre projet d'abord<br/>
        <div className="resume">Vous voulez mon CV?</div>
      </div>
    </div>
  )
}

export default Thought