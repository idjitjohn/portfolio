import React from 'react'
import './SnowFall.scss'
import { useEffect } from 'react'
import { allStacks } from '../../../data/stacks'
import './functions'
import { getCenters } from './functions'

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

const goIt = (px, py) => {
  const container = document.querySelector('.SnowFall');
  const loop = 2;
  const nbperside = Math.ceil(Math.sqrt(allStacks.length))
  const length = Math.pow(nbperside, 2)
  const min = Math.min(container.offsetWidth, container.offsetHeight)
  const total = Math.pow(min, 2)
  const side = Math.floor(Math.sqrt(total / length))
  const space = {
    x: (container.offsetWidth % side) / (Math.ceil(nbperside)),
    y: (container.offsetHeight % side) / (Math.ceil(nbperside)),
  }

  const {all, itemSide, layer: layerCount} = getCenters(min, allStacks.length)
  const layers = {}
  for (let i = 0; i < loop; i++) {
    allStacks.map((stack, index) => {
      const circle = all[index]
      if(!layers[circle.layer]) {
        const layer = document.createElement('div')
        layer.classList.add('layer')
        container.appendChild(layer)
        layers[circle.layer] = layer
        if(circle.layer % 2 === 0) layer.style.setProperty('--reverse', ' ')
        else layer.style.setProperty('--item-reverse', ' ')
        layer.style.setProperty('--anspeed', circle.layer + 1)
      }
      const snowflake = document.createElement('div')
      snowflake.classList.add('snowflake')
      const size = Math.random() * 20 + 5
      const speed = Math.random() * 2 + 1
      const left = Math.random()
      const delay = Math.random() * speed
      const blur = Math.random() * 3 + 2
      const zIndex = Math.round(10 - size)
      snowflake.style.top = `calc(${py / 100} * var(--height))`
      snowflake.style.left = `calc(${px / 100} * var(--width))`
      snowflake.style.setProperty('--delay', `-${delay}s`)
      snowflake.style.setProperty('--size', `${size * 3}px`)
      snowflake.style.setProperty('--speed', `${speed}s`)
      if(i === 1) snowflake.style.setProperty('--blur', `${blur}px`)
      snowflake.style.setProperty('--z-index', zIndex)
      snowflake.style.setProperty('--icon', `url(${stack.icon})`)

      setTimeout(() => {
        const top = Math.random() * (py - 10) / 100
        snowflake.style.top = `calc(${top} * var(--height))`
        snowflake.style.left = `calc(${left} * var(--width))`
        setTimeout(() => {
          snowflake.style.transition = `${(50 - top) / 100}s linear`
          snowflake.style.top = `calc(var(--height) - ${size}px)`
          snowflake.style.left = `calc(${left} * var(--width) + ${(Math.random() - .5) * 500}px)`
          setTimeout(() => {
            snowflake.style.setProperty('--size', `${itemSide - 10}px`)
            let dur = 8 + Math.random() * 4 - 2
            const pos = {x: index % nbperside, y: Math.floor(index / nbperside)}
            let top = pos.y * side + space.y * (pos.y + 1),
            left = pos.x * side + space.x * (pos.x + 1)

            snowflake.addEventListener('click', (e) => {
              e.stopPropagation()
              console.log(index, {pos})
            })
            
            if(i === 1){
              top = Math.random() * 100
              left = left + Math.random() * 10 - 5
              snowflake.style.opacity = `0`
              setTimeout(() => {
                snowflake.remove()
              }, dur * 1000)
              snowflake.style.top = `${top}%`
              snowflake.style.left = `${left}%`
            }
            snowflake.style.left = circle.x
            snowflake.style.top = circle.y
            snowflake.style.transition = `${dur}s linear`
          }, 1000)
        }, 400)
      }, 10)
      layers[circle.layer].appendChild(snowflake)
    })
  }
}



