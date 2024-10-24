import React from 'react'
import clsx from 'clsx'
import profile from '../../../assets/images/profile.webp'
import './Left.scss'
import contacts from '../../../data/contacts'

const Left = () => {
  return (
    <div className={clsx('Left')}>
       <div className="profile-parent">
          <img src={profile} alt="profile" className="profile"/>
        </div>
        <div className="contacts">
          {
            contacts.contacts.map(({name, href, text, icon}) => {
              href = href ? {href, target: '_blank'} : {}
              return <a style={{'--icon': `url(${icon})`}} key={name} className={name} {...href}>
                <span>{text}</span>
              </a>
            })
          }
        </div>
        <div className="socials">
          {
            contacts.socials.map(({name, href, text, icon}) => {
              return <a style={{'--icon': `url(${icon})`}} key={name} className={name} href={href}>
                <span>{text}</span>
              </a>
            })
          }
        </div>
    </div>
  )
}
export default Left