import Head from 'next/head'
import Main from 'layouts/Main'

export default function About () {
  const color = 'green'

  return (
    <Main>
      <Head>
        <title>NextJS | About us</title>
      </Head>

      <h2>About Us</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse
        inventore ipsam vel ab numquam fuga quis sit incidunt. Quibusdam sit
        minima reiciendis sint cupiditate veritatis in molestias qui. Saepe!
        inventore ipsam vel ab numquam fuga quis sit incidunt. Quibusdam sit
        minima reiciendis sint cupiditate veritatis in molestias qui. Saepe!
      </p>
      <style jsx global>{`
        h2 {
          color: ${color};
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
