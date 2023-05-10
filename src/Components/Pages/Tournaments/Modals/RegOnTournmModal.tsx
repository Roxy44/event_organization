import React from 'react';

import { Form, Input, Modal } from 'antd';

import { changeTournamenPlace } from '../../../Actions/tournamentsAction';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../types';

import './RegOnTournmModal.css';


const RegOnTournmModal = (props: any) => {

    const [ form ] = Form.useForm();

    const dispatch = useDispatch();

    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    const filteredData = tournamentsData.filter((item: { name: string }) => item.name === props.name)[0];

    const withoutFilteredData = tournamentsData.filter((item: { name: string }) => item.name !== props.name);

    const handleOk = () => {

        form.validateFields()
            .then(async values => dispatch(await changeTournamenPlace(withoutFilteredData, filteredData, values.tournamentPlace)))
            .then(() => form.setFieldsValue({
                tournamentPlace: '',
                
            }));

        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Подтверждение турнира' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form 
                className='regOnTournmModal'
                form={form}
            >   
                <Form.Item label='Место проведения' name='tournamentPlace' rules={[{ required: true, message: '' }]}>
                    <Input></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegOnTournmModal;