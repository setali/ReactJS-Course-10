import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
import Random from 'cmp/Random'
import 'styles/global.css'

export default function App ({ Component, pageProps }) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [])

  return (
    <div>
      {loading && 'Loading ...'}
      <NextNProgress />
      <Random />
      <Component {...pageProps} />
    </div>
  )
}
