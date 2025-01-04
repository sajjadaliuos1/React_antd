import React from 'react'
import  './Form.css'
import { Form,Button,Input,Checkbox,Select,DatePicker } from 'antd'
import FormItem from 'antd/es/form/FormItem'
export default function FormAnt() {
  return (
    <div className="container">
      <h2>Registration Form</h2>
    <Form autoComplete='off'>
       
        <Form.Item
          name="FullName"
          label='Full Name'
          rules={[
            { required: true, message: 'Please input your name' },
            {whitespace:true}
           
          ]}
          hasFeedback
        >
          <Input placeholder="Full Name" />
        </Form.Item>
       
        <Form.Item
          name="Email"
          label='Email'
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
            {whitespace:true},

          ]}
          hasFeedback
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label='Password'
          rules={[
            { required: true, message: 'Please input your password' },
            
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confrimpassword"
          label='confrimPassword'
          rules={[
            { required: true, message: 'Please input your confrim password' },
            
          ]}
        >
          <Input.Password placeholder="confrimPassword" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="birthdate"
         label ='DoB'
        >
          <DatePicker placeholder="Select Birthdate" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="remember" >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
    </Form>
    
    </div>
  )
}
