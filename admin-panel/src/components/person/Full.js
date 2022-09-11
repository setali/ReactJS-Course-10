import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPerson } from '../../redux/actions/person'

function useRedux (stateName) {
  const dispatch = useDispatch()
  const data = useSelector(state => state[stateName])

  return [data, dispatch]
}

export default function Full () {
  const { id } = useParams()

  // const dispatch = useDispatch()
  // const person = useSelector(state => state.person)

  const [person, dispatch] = useRedux('person')

  useEffect(() => {
    dispatch(getPerson(id))
  }, [])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام</label>
      <Divider type='vertical' />
      <span>{person.name}</span>
      <Divider />
      <label>ایمیل</label>
      <Divider type='vertical' />
      <span>{person.email}</span>
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
