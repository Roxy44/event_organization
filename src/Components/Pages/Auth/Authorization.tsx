import React from 'react';

import { Layout, Form, Button, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';

import './Authorization.css'

const { Header, Content } = Layout;

const Authorization = () => {
      const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Layout className="site-layout">
            <Header className="site-layout-background pageHeader">
                <span className='headerTitle'>Auth / Reg</span>
            </Header>
            <Content className="site-layout-background authorization">
                <Form
                    className='formAutorization'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button className='registrationBtn' type="primary" >
                            Registration
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
};

export default Authorization;