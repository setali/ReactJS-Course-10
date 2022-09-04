import { Table as AntTable } from 'antd'
import { useMemo } from 'react'

export default function Table ({ data, columns, rowKey = 'id', ...props }) {
  const tableColumns = useMemo(() => {
    return columns.map(column => ({
      ...column,
      dataIndex: column.dataIndex || column.key
    }))
  }, [columns])

  return (
    <AntTable
      dataSource={data}
      columns={tableColumns}
      rowKey={rowKey}
      {...props}
    />
  )
}
