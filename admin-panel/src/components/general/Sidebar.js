import { Link } from 'react-router-dom'
import {
  DashboardOutlined,
  FormOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Sider } = Layout

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = [
  getItem(<Link to='/'>داشبورد</Link>, 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem(<Link to='/person'>لیست کاربران</Link>, 'users-list'),
    getItem(<Link to='/person/new'>افزودن کاربر</Link>, 'add-user')
  ]),
  getItem('مدیریت مقالات', 'posts', <FormOutlined />, [
    getItem(<Link to={'/post'}>لیست مقالات</Link>, 'posts-list')
  ]),
  getItem('تنظیمات', 'settings', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]

export default function Sidebar () {
  const onClick = e => {
    console.log('click ', e)
  }

  return (
    <Sider>
      <Menu
        onClick={onClick}
        style={{
          width: 256
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['users', 'posts']}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}
