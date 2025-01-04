
import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 

import '../App.css'; 


export default function Basicant() {
  
    const [loading, setLoading] = useState(false);
  const fruits = ["banana", "orange", "Apple", "Mango"];

  const onclickbutton = () => {
    console.log("click on button");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };  
      return (
        <div className="container">
          <div className="input-container">
            <Input
              placeholder="Name"
              prefix={<UserAddOutlined />}
              className="input-field"
            />
          </div>
          <div className="select-container">
            <p>Select your favorite fruit:</p>
            <Select  mode='multiple' 
            maxTagCount={2}
            allowClear
            style={{ width: "200px" }} placeholder="Select fruits">
              {fruits.map((fruit, index) => (
                <Select.Option key={index} value={fruit}>
                  {fruit}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="button-container">
            <Button
              type="primary"
              icon={<LogoutOutlined />}
              loading={loading}
              onClick={onclickbutton}
            >
              Click Me
            </Button>
          </div>
        </div>
      );
    };
    
   
    
  

