import { BrowserRouter, Link } from 'react-router-dom';

import { Menu, Layout, Select } from 'antd';

import { TrophyIcon } from './Components/icons';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Components/types';

import RoutesComponent from './Components/Routes/RoutesComponent';

import './App.css';

const { Sider } = Layout;

const App = () => {
    const dispatch = useDispatch();

    const data = useSelector((state: RootState) => state.routes.routesData);
    const { userRole, authorized } = useSelector((state: RootState) => state.authorization);

    return (
        <BrowserRouter>
            <Layout>
                <Sider trigger={null} style={{ height: '100vh' }}>	
                    <Menu theme='dark' mode='inline'>
                        <Menu.Item key='0' className='logo' icon={TrophyIcon()} >
                            <Link to='/event_organization'>Спартакиады</Link>
                        </Menu.Item>                           
                        {data.map((item: any) => (
                            <Menu.Item style={item.available.includes(userRole) ? {display: 'block'} : {display: 'none'}} key={item.key} icon={item.icon} >
                                <Link to={item.path}>{item.name}</Link>
                            </Menu.Item>
                        ))}
                        {authorized &&   
                            <div className='menuItem'>
                                <span>Роль:</span>
                                <Select 
                                    className='menuSelect'
                                    defaultValue='Администратор'
                                    onChange={(value) => dispatch({ type: 'SET_USER_ROLE', payload: value })}
                                >
                                    <Select.Option key={1} value='admin'>Администратор</Select.Option>
                                    <Select.Option key={2} value='organizator'>Организатор</Select.Option>
                                    <Select.Option key={3} value='competitor'>Ответственный</Select.Option>
                                    <Select.Option key={4} value='user'>Пользователь</Select.Option>
                                </Select>
                            </div>    
                        }
                    </Menu>;
                </Sider>
                <RoutesComponent />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
