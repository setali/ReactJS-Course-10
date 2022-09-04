import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export default function Page404 () {
  return (
    <div>
      <Result
        status='404'
        title='۴۰۴'
        subTitle='متاسفانه این صفحه وجود ندارد.'
        extra={
          <Link to='/'>
            <Button type='primary'>بازگشت به صفحه اصلی</Button>
          </Link>
        }
      />
    </div>
  )
}
