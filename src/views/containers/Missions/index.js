import React from 'react'
import Project from '../../components/Project'
import './Missions.scss'
import 'swiper/css'
import 'swiper/css/mousewheel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules';
import xps from '../../../data/xps'
import clsx from 'clsx'

const Missions = ({active}) => {
  return (
    <div className={clsx('Missions', {active})}>
      <Swiper
        direction={'vertical'}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        mousewheel={true}
        modules={[Mousewheel]}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          xps.fr.filter(xp => !!xp.logo).map((xp, i) => {
            return <SwiperSlide className='proj-container' key={xp.start}><Project xp={xp}/></SwiperSlide>
          })
        }
      </Swiper>
      
    </div>
  )
}

export default Missions