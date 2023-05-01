import { BrowserRouter, Link } from 'react-router-dom';

import { Menu, Layout, Button, Select } from 'antd';

import { TrophyIcon } from './Components/icons';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Components/types';

import RoutesComponent from './Components/Routes/RoutesComponent';

import './App.css';

const { Sider } = Layout;

const App = () => {
    const dispatch = useDispatch();

    const activeTab = useSelector((state: any) => state.routes.activeTab);
    const data = useSelector((state: RootState) => state.routes.routesData);
    const { userRole, authorized } = useSelector((state: RootState) => state.authorization);

    const setActiveTab = (activeTab: number) => {
        dispatch({type: 'SET_ACTIVETAB', payload: activeTab});
    }; 

    return (
        <BrowserRouter>
            <Layout>
                <Sider trigger={null} style={{ height: '100vh' }}>	
                    <Menu theme='dark' mode='inline'>
                        <Menu.Item key='0' className='logo' icon={TrophyIcon()} >
                            <Link to='/SportsOrganization' onClick={() => dispatch({type: 'SET_ACTIVETAB', payload: ''})}>Sport Organisation</Link>
                        </Menu.Item> 
                        {authorized && (activeTab ? 
                            <>
                                <div className='buttonBack' style={{borderBottom: '1px solid white', paddingBottom: '0.5rem'}}>
                                    <Button type='primary' onClick={() => setActiveTab(0)}>Назад</Button>
                                </div>
                                <>
                                    {data.find((element: any) => element.key === activeTab)?.children.map((item: any) => (
                                        <Menu.Item disabled={!item.available.includes(userRole)} key={item.key} icon={item.icon} >
                                            <Link to={item.path}>{item.name}</Link>
                                        </Menu.Item>
                                    ))}
                                </>
                                <div className='menuItem'>
                                    <span>Роль:</span>
                                    <Select 
                                        className='menuSelect'
                                        defaultValue={userRole}
                                        options={[
                                            { value: 'admin', label: 'Администратор' },
                                            { value: 'organizator', label: 'Организатор' },
                                            { value: 'competitor', label: 'Участник' },
                                            { value: 'user', label: 'Пользователь' },
                                        ]}
                                        onChange={(value) => dispatch({ type: 'SET_USER_ROLE', payload: value})}
                                    />
                                </div>
                            </>
                            : 
                            data.map((item: any) => (
                                <Menu.Item key={item.key} icon={item.icon} >
                                    <Link to={item.path} onClick={() => setActiveTab(item.key)}>{item.name}</Link>
                                </Menu.Item>
                            ))
                        )}
                    </Menu>;
                </Sider>
                <RoutesComponent />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
