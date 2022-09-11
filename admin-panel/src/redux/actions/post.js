import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'

export const setPosts = createAction('POSTS')
export const setPost = createAction('POST')

export function getPosts () {
  return (dispatch, getState) => {
    if (!getState().posts.length) {
      request('/posts').then(({ data }) => dispatch(setPosts(data)))
    }
  }
}

export function getPost (id) {
  return dispatch =>
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
}

// getData('/posts', 'POSTS', (data) => {
//   console.log(data)
// })

// export function getData (url, actionType, cb) {
//   return dispatch =>
//     request(url).then(({ data }) => {
//       dispatch({ type: actionType, payload: data })
//       cb(data)
//     })
// }
