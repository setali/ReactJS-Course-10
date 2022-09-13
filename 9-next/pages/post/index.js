// import { useEffect, useState } from 'react'
import Main from '../../layouts/Main'
import axios from 'axios'
import Link from 'next/link'

export default function Posts ({ posts }) {
  //   const [posts, setPosts] = useState([])

  //   console.log('posts', posts)
  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => setPosts(data))
  //   }, [])

  return (
    <Main>
      <h2>Posts list</h2>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const { data: posts } = await axios(url)

  console.log('Posts count:', posts.length)

  return {
    props: {
      posts
    },
    revalidate: 10 // in seconds
  }
}
