import Head from 'next/head'
import Main from 'layouts/Main'
import styles from 'styles/contact.module.css'

export default function Contact () {
  return (
    <Main>
      <Head>
        <title>NextJS | Contact us</title>
      </Head>
      <h2 className={styles.header}>Contact Us</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse
        inventore ipsam vel ab numquam fuga quis sit incidunt. Quibusdam sit
        minima reiciendis sint cupiditate veritatis in molestias qui. Saepe!
      </p>
    </Main>
  )
}
