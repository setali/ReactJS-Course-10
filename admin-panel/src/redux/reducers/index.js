import { combineReducers } from '@reduxjs/toolkit'
import { persons, person } from './person'
import { post, posts } from './post'

const reducer = combineReducers({
  persons,
  person,
  posts,
  post
})

export default reducer

// export default function reducer (
//   state = { persons: [], person: {}, posts: [] },
//   action
// ) {
//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'PERSON':
//       return { ...state, person: action.payload }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     default:
//       return state
//   }
// }
