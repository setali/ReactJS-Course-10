import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'

export const setPersons = createAction('PERSONS')
export const setPerson = createAction('PERSON')

export function getPersons () {
  return dispatch =>
    request('/users').then(({ data }) => dispatch(setPersons(data)))
}

export const getPerson = id => dispatch => {
  dispatch(setPerson({}))
  request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)))
}
