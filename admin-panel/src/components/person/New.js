import { genders } from '../../tools/constants'
import request from '../../tools/request'
import { message } from 'antd'
import Form, { Text, Select, Checkbox, Submit } from '../utils/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function New () {
  const [disableButton, setDisableButton] = useState(false)

  const navigate = useNavigate()

  function handleSubmit (data) {
    setDisableButton(true)
    request('/users', { method: 'POST', data })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد.')
        navigate('/person')
      })
      .catch(() => message.error('متاسفانه مشکلی پیش آمده است.'))
      .finally(() => setDisableButton(false))
  }

  return (
    <div>
      <Form name='basic' onFinish={handleSubmit}>
        <Text label='نام' name='name' required />
        <Text label='نام کاربری' name='username' required />
        <Select label='جنسیت' name='gender' required options={genders} />
        <Checkbox name='admin' label='مدیر' />
        <Submit disabled={disableButton} />
      </Form>
    </div>
  )
}
