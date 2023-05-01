import React from 'react';

import { Button, Form, Input, Modal } from 'antd';

import './RegOnTournmModal.css';

const RegOnTournmModal = (props: any) => {
    
    const handleOk = () => {
        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Запись на турнир' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form className='regOnTournmModal'>
                <Form.Item label='Название команды'>
                    <Input placeholder='Введите название команды' />
                </Form.Item>
                <Form.Item className='teamPlayers' label='Список участников команды'>
                    <Form className='playerInfo'>
                        <Form.Item label='ФИО'>
                            <Input placeholder='Введите ФИО игрока' />
                        </Form.Item>
                        <Form.Item label='Возраст'>
                            <Input placeholder='Введите возраст игрока' />
                        </Form.Item>
                        <Form.Item label='Рост'>
                            <Input placeholder='Введите рост игрока' />
                        </Form.Item>
                        <Form.Item label='Информация'>
                            <Input placeholder='Введите информацию о игроке' />
                        </Form.Item>
                    </Form>
                    <Form.Item >
                        <Button type='primary'>+</Button>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegOnTournmModal;