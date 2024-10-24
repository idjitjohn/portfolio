import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './views/containers/Home'
import Login from './views/containers/Login'
import Resume from './views/containers/Resume'

const protectedRoutes = [
  // ['/myroute/:params', Component]
].map(([path, component]) => ({ path, component, isProtected: true }))

const routes = [
  ['/portfolio', Home],
  ['/', Home],
  ['/resume', Resume],
  // ['/myroute/:params', Component],
].map(([path, component]) => ({ path, component}))

function Router(props) {
  const token = ''
  return (
    <Routes>
      {
        [...protectedRoutes, ...routes].map(({ path, isProtected, component: Component }, key) => {
          if(typeof Component === 'string') {
            return <Route {...{key, path}} element={<Navigate to={Component} replace/>}/>
          }
          return <Route {...{ key, path }} element={
            isProtected && !token ? <Login/> : <Component/> 
          }/>
        })
      }
    </Routes>
  )
}

export default Router
