import React from 'react';

import { Layout, Form, Button, DatePicker, Input, Select, Switch } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../types';

import { changeTournamentsData } from '../../Actions/tournamentsAction';

import './Organization.css';

const { Header, Content } = Layout;

const { RangePicker } = DatePicker;

const Organisation = () => {
    const [ form ] = Form.useForm();

    const dispatch = useDispatch();

    const { universitiesData } = useSelector((state: RootState) => state.universities);
    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    const organizeTournament = () => {
        form.validateFields()
            .then(async values => dispatch(await changeTournamentsData(tournamentsData, values)))
            .then(() => form.setFieldsValue({
                sportType: true,
                tournamentName: '',
                format: [],
                period: '',
                main: [],
                competitors: [],
                prize_pool: '',
            }));
    };
    
    return ( 
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Организовать турнир</span>
            </Header>           
            <Content className='content'>
                <Form 
                    className='form'
                    form={form}
                    autoComplete='off'
                >
                    <Form.Item label='Вид соревнования' name='sportType' initialValue={true}>
                        <Switch checkedChildren='Муж' unCheckedChildren='Жен' defaultChecked />
                    </Form.Item>
                    <Form.Item label='Название турнира' name='tournamentName' rules={[{ required: true, message: '' }]}>
                        <Input placeholder='Введите название турнира' />
                    </Form.Item>
                    <Form.Item label='Формат проведения' name='format' rules={[{ required: true, message: '' }]}>
                        <Select 
                            placeholder='Выберите формат проведения' 
                            options={[
                                {value: 'Студенты'},
                                {value: 'Профессора'},
                                {value: 'Свободный'},
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label='Время проведения' name='period' rules={[{ required: true, message: '' }]}>
                        <RangePicker format='DD.MM.YYYY'/>
                    </Form.Item>
                    <Form.Item label='Ответственный за организацию' name='main' rules={[{ required: true, message: '' }]}>
                        <Select 
                            placeholder='Выберите ответственного за организацию турнира' 
                            options={[...universitiesData].map((item: { name: string }) => ({ value: item.name }))}
                        />
                    </Form.Item>
                    <Form.Item label='Участники турнира' name='competitors' rules={[{ required: true, message: '' }]}>
                        <Select 
                            mode='multiple'
                            placeholder='Выберите участников турнира' 
                            options={[...universitiesData].map((item: { name: string }) => ({ value: item.name }))}
                        />
                    </Form.Item>
                    <Form.Item label='Призовой фонд' name='prize_pool' rules={[{ required: true, message: '' }]}>
                        <Input placeholder='Введите призовой фонд турнира в руб.' />
                    </Form.Item>
                </Form>
                <div className='footer'>
                    <Button type='primary' onClick={() => organizeTournament()}>Организовать</Button>
                </div>
            </Content>  
        </Layout>
    );
};

export default Organisation;