import axios from 'axios'
import Main from '../../layouts/Main'
// import { useRouter } from 'next/router'

export default function Post ({ post = {} }) {
  //   const {
  //     query: { id }
  //   } = useRouter()

  return (
    <Main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Main>
  )
}

export async function getStaticPaths () {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ]

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params: { id } }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`

  const { data: post } = await axios(url)

  console.log('Post fetch', post.id)

  return {
    props: { post },
    revalidate: 60
  }
}
