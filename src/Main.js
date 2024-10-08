import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import { bulkSetter } from './services/functions'
import Popup from './views/components/Popup'
import Router from './Router'
import './Main.scss'

const states = {
  popup: { message: '' }
}

function Main() {
  const global = bulkSetter(...useState(states))
  return (
    <BrowserRouter>
      <div className="Main">
        <Popup {...global.popup}/>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default Main