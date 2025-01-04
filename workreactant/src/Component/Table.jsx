import React from 'react'
import {Table} from 'antd'
export default function Tableant() {
    const Data = [
        { name: 'name1', Age: 10, address: 'swat', key: '1' },
        { name: 'name2', Age: 20, address: 'swat', key: '2' },
        { name: 'name3', Age: 30, address: 'swat', key: '3' },
        { name: 'name4', Age: 40, address: 'swat', key: '4' },
        { name: 'name5', Age: 50, address: 'swat', key: '5' },
        { name: 'name6', Age: 90, address: 'swat', key: '6' },
        
      ];
    
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render : name =>{
            return <a>{name}</a>
          }
        },
        {
          title: 'Age',
          dataIndex: 'Age',
          key: 'Age',
          sorter:(a,b)=> a.Age = b.Age
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        
        {
          title: 'Graduated',
          key: 'graduated', 
          render: (payload) => <p>{payload.Age > 10 ? 'true' : 'false'}</p>, 
        }
        
      ];
  return (
   <div>
        <Table dataSource={Data} columns={columns} />
      </div>
  )
}
