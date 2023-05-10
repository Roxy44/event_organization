import React from 'react';

import { DatePicker, Form, Input, Modal } from 'antd';

import { useDispatch } from 'react-redux';

import { addTournamenMatch } from '../../../../Actions/tournamentsAction';

const AddMatchModal = (props: any) => {

    const [ form ] = Form.useForm();

    const dispatch = useDispatch();

    const handleOk = () => {
        
        form.validateFields()
            .then(async values => dispatch(await addTournamenMatch(props.tournamentsData, props.filteredData, values)))
            .then(() => form.setFieldsValue({
                date: '',
                team1: '',
                team2: '',
                result: '',
            }));

        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Добавить матч' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form 
                className='regOnTournmModal'
                form={form}
                autoComplete='off'
            >   
                <Form.Item label='Дата' name='date' rules={[{ required: true, message: '' }]}>
                    <DatePicker format='DD.MM.YYYY'/>
                </Form.Item>
                <Form.Item label='Команды'>
                    <Form.Item name='team1' rules={[{ required: true, message: '' }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name='team2' rules={[{ required: true, message: '' }]}>
                        <Input></Input>
                    </Form.Item>
                </Form.Item>
                <Form.Item label='Результат' name='result' rules={[{ required: true, message: '' }]}>
                    <Input></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddMatchModal;