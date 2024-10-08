import React from 'react'
import './SnowFall.scss'
import { useEffect } from 'react'
import { allStacks } from '../../../data/stacks'
import './functions'

const SnowFall = () => {
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      goIt(e.pageX * 100 / window.innerWidth, e.pageY * 100 / window.innerHeight)
      a = true
      setTimeout(() => {
        const hall = document.querySelector('.Hall')
        // hall.classList.add('turned')
      }, 1000)
    })
  }, [])
  return (
    <div className='SnowFall'></div>
  )
}

export default SnowFall

let a = false

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

const goIt = (px, py) => {
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



