import Main from 'layouts/Main'
import Head from 'next/head'

export default function Home () {
  return (
    <Main analyze={true}>
      <Head>
        <title>NextJS | Homepage</title>
      </Head>
      <div>Home Page</div>
      <div>Welcome {process.env.myName}</div>
    </Main>
  )
}
