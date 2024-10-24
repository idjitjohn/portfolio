import React, {useCallback} from 'react'
import './Contact.scss'
import { getText } from '../../../data/langs'
import { useRecoilValue } from 'recoil'
import { langState } from '../../../atoms'
import { Link } from 'react-router-dom'

const Contact = () => {
  const {value} = useRecoilValue(langState)
  const text = useCallback((key) => getText(key, value), [value])
  return (
    <div className="Contact">
      <Link to='/resume'><button className="contact-button button">{text('contactme')}</button></Link>
      <div className="socials">
        <a href="https://www.linkedin.com/in/marsonlj" target='_blank' className="linkedin"></a>
        <a href='https://github.com/idjitjohn' target='_blank' className="github"></a>
        <a href='https://x.com/MarsonLJ' target='_blank' className="twitter"></a>
      </div>
    </div>
  )
}

export default Contact