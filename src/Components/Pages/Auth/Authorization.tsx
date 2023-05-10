import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Layout, Form, Button, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';

import 'antd/dist/antd.css';

import './Authorization.css';


const { Header, Content } = Layout;

const Authorization = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { usersAccauntData } = useSelector((state: RootState) => state.authorization);

    const onFinish = (values: any) => {
        let auth = false;
        let role = 'user';
        usersAccauntData.forEach((item: {login: string, password: string, role: string}) => {
            if (item.login === values.username && item.password === values.password) { 
                auth = true;
                role = item.role;
            }
        });

        if (auth) {
            dispatch({ type: 'SET_AUTHORIZATION_STATUS', payload: true });
            dispatch({ type: 'SET_USER_ROLE', payload: role });
            navigate('/event_organization/news');
        } else {
            alert('Неправильный логин или пароль');
        }
    };
    
    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Auth / Reg</span>
            </Header>
            <Content className='site-layout-background authorization'>
                <Form
                    className='formAutorization'
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                        <Button className='registrationBtn' type='primary' >
                            Registration
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Authorization;