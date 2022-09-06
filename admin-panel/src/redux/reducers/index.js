export default function reducer (state = { persons: [], posts: [] }, action) {
  console.log(state, action)

  switch (action.type) {
    case 'PERSONS':
      return { ...state, persons: action.payload }

    case 'POSTS':
      return { ...state, posts: action.payload }

    default:
      return state
  }
}
