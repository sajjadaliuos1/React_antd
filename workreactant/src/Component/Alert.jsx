import React from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

const { Title } = Typography;

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        
        // Use setTimeout correctly to display the message after 2 seconds
        setTimeout(() => {
          message.error('Login Failed');
        }, 2000);
      };
      

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Login
        </Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={styles.form}
        >
          {/* Email Input */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your Email!' },
              { type: 'email', message: 'Please enter a valid Email!' },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          {/* Remember Me and Forgot Password */}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <a style={styles.forgotLink} href="/forgot-password">
              Forgot Password?
            </a>
          </Form.Item>

          {/* Login Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>

          {/* Sign Up Link */}
          <div style={{ textAlign: 'center' }}>
            Don't have an account? <a href="/register">Sign Up</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  formWrapper: {
    width: 350,
    padding: 20,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    marginTop: 20,
  },
  forgotLink: {
    float: 'right',
  },
};

export default LoginPage;
