import React, { useRef } from 'react'
import './SnowFall.scss'
import { useEffect } from 'react'
import { allStacks } from '../../../data/stacks'
import './functions'
import clsx from 'clsx'

const SnowFall = ({active}) => {
  const ref = useRef(0)
  useEffect(() => {
    if(!ref.current) goIt()
      ref.current++
  }, [])

  return (
    <div className={clsx('SnowFall', {active})}/>
  )
}

export default SnowFall

function shuffle(array) {
  array = [...array]
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array
}

const goIt = () => {
  const container = document.querySelector('.SnowFall')
  const containers = []
  const stacks = allStacks.map((stack) => {
    const stackElt = document.createElement('div')
    stackElt.style.setProperty('--icon', `url(${stack.icon})`)
    stackElt.classList.add('stack')
    return stackElt
  })
  for (let i = 0; i < 4; i++) {
    const layer = document.createElement('div')
    layer.style.setProperty('--nb', i)
    layer.style.setProperty('--count', stacks.length)
    layer.classList.add('layer')
    container.appendChild(layer)
    containers.push(layer)
    shuffle(stacks).forEach(stack => {
      layer.appendChild(i ? stack.cloneNode() : stack)
    });
    setTimeout(() => {
      layer.classList.add('shown')
    }, 10)
  }
}



