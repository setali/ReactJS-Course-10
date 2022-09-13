import axios from 'axios'
import Link from 'next/link'
import Main from '../../layouts/Main'

export default function Users ({ users }) {
  return (
    <Main>
      <h3>Users list</h3>
      <ol>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/user/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data: users } = await axios(url)

  console.log('Users count:', users.length)

  return {
    props: {
      users
    }
  }
}
