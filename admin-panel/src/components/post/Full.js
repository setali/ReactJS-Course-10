import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../../redux/actions/post'

function useData (stateName) {
  return useSelector(s => s[stateName])
}

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()

  // Wrong
  // const { post, posts } = useSelector(state => ({
  //   post: state.post,
  //   posts: state.posts
  // }))

  // const post = useSelector(s => s.post)
  // const posts = useSelector(s => s.posts)
  const post = useData('post')
  const posts = useData('posts')

  console.log(posts.length)

  useEffect(() => {
    dispatch(getPost(id))
  }, [])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <p>{post.body}</p>
      <Divider />
      <Link to='/post'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
