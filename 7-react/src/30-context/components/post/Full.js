import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { useParams } from 'react-router-dom'
import request from '../../tools/request'
import Loading from '../utils/Loading'

export default function Full () {
  const theme = useContext(ThemeContext)
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    request(`/posts/${id}`)
      .then(({ data }) => setPost(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='box' style={{ ...theme }}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}
