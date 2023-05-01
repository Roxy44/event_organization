import React from 'react';

import { DatePicker, Form, Input, Modal, Select, Switch } from 'antd';
import { useForm } from 'antd/lib/form/Form';
//import moment from 'moment';

const { RangePicker } = DatePicker;

const OrganizeTournm = (props: any) => {
    
    const [ form ] = useForm();

    // todo add momnet time convertion
    const handleOk = () => {
        form.validateFields().then(values => {
            console.log(values);
        });
        //props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Организовать турнир' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                form={form}
            >
                <Form.Item label='Вид соревнования' name='sportType' initialValue={true}>
                    <Switch checkedChildren='Муж' unCheckedChildren='Жен' defaultChecked />
                </Form.Item>
                <Form.Item label='Название турнира' name='tournamentName' required>
                    <Input placeholder='Введите название турнира' />
                </Form.Item>
                <Form.Item label='Формат проведения' name='format' required>
                    <Select 
                        placeholder='Выбирите формат проведения' 
                        options={[
                            {value: 'Студенты'},
                            {value: 'Профессора'},
                            {value: 'Свободный'},
                        ]}
                    />
                </Form.Item>
                <Form.Item label='Время проведения' name='holdingTime' required>
                    <RangePicker showTime />
                </Form.Item>
                <Form.Item label='Ответственный за организацию' name='owner' required>
                    <Input placeholder='Введите ответственного за организацию турнира' />
                </Form.Item>
                <Form.Item label='Место проведения' name='place' required>
                    <Input placeholder='Введите место проведения турнира' />
                </Form.Item>
                <Form.Item label='Призовой фонд' name='prizePool' required>
                    <Input placeholder='Введите призовой фонд турнира' />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default OrganizeTournm;