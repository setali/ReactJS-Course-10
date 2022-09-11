import { createReducer } from '@reduxjs/toolkit'
import { setPersons, setPerson } from '../actions/person'

export const persons = createReducer([], {
  [setPersons]: (state, action) => action.payload
})

export const person = createReducer(
  {},
  {
    [setPerson]: (_, { payload }) => payload
  }
)
