import {
  Form,
  Input,
  Select as AntSelect,
  Checkbox as AntCheckbox,
  Button
} from 'antd'

const { Option } = AntSelect

export default Form

export function Text ({ label, name, required, ...props }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <Input />
    </Form.Item>
  )
}

export function Select ({ label, name, required, options }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <AntSelect>
        {options.map(({ label, value }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Checkbox ({ label, name }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  )
}

export function Submit ({ label = 'ذخیره', disabled }) {
  return (
    <Form.Item>
      <Button type='primary' htmlType='submit' disabled={disabled}>
        {label}
      </Button>
    </Form.Item>
  )
}
