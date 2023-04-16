import { Modal } from 'antd';

import React from 'react';

const RegOnTournmModal = (props: any) => {
    
    const handleOk = () => {
        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title='Basic Modal' open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default RegOnTournmModal;