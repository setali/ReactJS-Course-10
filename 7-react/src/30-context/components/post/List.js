import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import request from '../../tools/request'
import Loading from '../utils/Loading'
import { Link } from 'react-router-dom'

export default function Posts () {
  const theme = useContext(ThemeContext)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    request('/posts', { params: { page, limit: 20 } })
      .then(({ data }) => {
        data.length = 20
        setPosts(data)
      })
      .finally(() => setLoading(false))
  }, [page])

  return (
    <div className='box' style={{ ...theme }}>
      <h2>Posts list</h2>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <ol>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ol>
          <div>
            <ul>
              {new Array(5)
                .fill(1)
                .map((el, index) => el + index)
                .map(item => (
                  <li onClick={() => setPage(item)} key={item}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
