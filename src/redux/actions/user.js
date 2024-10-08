import * as Service from '../../services/backends/user'
import {
  ADD_USER, REMOVE_USER,
} from '../types'

export const getUsers = (users = []) => async dispatch => {
  users = await Service.getUsers(users)
  dispatch({type: ADD_USER, payload: users})
  return users
}

export const saveUser = user => async dispatch => {
  user = await Service.saveUser(user)
  dispatch({type: ADD_USER, payload: [user]})
  return user
}

export const removeUser = user => async dispatch => {
  user = await Service.removeUser(user)
  dispatch({type: REMOVE_USER, payload: [user]})
  return user
}
