import * as Service from '../../services/backends/auth'
import { RESET, SET_TOKEN, SET_USER } from '../types'

export const logout = () => async dispatch => {
  dispatch({ type: RESET })
}

export const signin = (creds) => async dispatch => {
  const { user, token } = await Service.signin(creds)
  dispatch({ type: SET_USER, payload: user })
  dispatch({ type: SET_TOKEN, payload: token })
  return { user, token }
}

export const check = () => async dispatch => {
  try{
    const { user } = await Service.check()
    dispatch({ type: SET_USER, payload: user })
    return { user }
  } catch(err){
    dispatch(logout())
  }
}
