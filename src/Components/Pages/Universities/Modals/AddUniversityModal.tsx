import React from 'react';

import { Form, Input, Modal } from 'antd';
import { AddUniversityAction } from '../../../Actions/universitiesAction';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types';

import './AddUniversityModal.css';

const AddUniversityModal = (props: any) => {
    
    const [ form ] = Form.useForm();

    const { universitiesData, minId } = useSelector((state: RootState) => state.universities);

    const dispatch = useDispatch();

    const handleOk = () => {
        form.validateFields()
            .then(async values => dispatch(await AddUniversityAction(universitiesData, minId, values)))
            .then(() => form.setFieldsValue({
                name: '',
                main: '',
                number: '',
                email: '',
            }));
        dispatch({ type: 'SET_MIN_ID', payload: minId + 1 });
        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Добавить университет' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                form={form}
            >
                <Form.Item name='name' label='Наименование вуза'>
                    <Input placeholder='Введите наименование вуза' />
                </Form.Item>
                <Form.Item name='main' label='Ответственный'>
                    <Input placeholder='Введите ФИО ответственного вуза' /> 
                </Form.Item> 
                <Form.Item name='number' label='Номер телефона'>
                    <Input placeholder='Введите номер телефона ответственного' /> 
                </Form.Item> 
                <Form.Item name='email' label='e-mail'>                 
                    <Input placeholder='Введите электронный адрес ответственного' />        
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddUniversityModal;