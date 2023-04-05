import { MehOutlined } from '@ant-design/icons'
import { Result } from 'antd'

const Error = () => {
  return <Result icon={<MehOutlined />} title="Oops, We have some problems..." />
}
export default Error
