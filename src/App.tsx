import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Menu, Layout, Button } from 'antd';

import { TrophyIcon } from './Components/icons';

import { useSelector, useDispatch } from 'react-redux';

import Authorization from './Components/Pages/Auth/Authorization';
import News from './Components/Pages/News/News';
import Tournaments from './Components/Pages/Tournaments/Tournaments';
import TournamentInfo from './Components/Pages/Tournaments/TournamentInfo';
import Teams from './Components/Pages/Teams/Teams';
import TeamInfo from './Components/Pages/Teams/TeamInfo';

import './App.css';



const { Sider } = Layout;

const App = () => {

    const dispatch = useDispatch();

	const activeTab = useSelector((state: any) => state.routes.activeTab)
    const data = useSelector((state: any) => state.routes.routesData);

    const setActiveTab = (activeTab: number) => {
        dispatch({type: 'SET_ACTIVETAB', payload: activeTab});
    } 

	const dataMenu = 
    <Menu theme="dark" mode="inline">
		<Menu.Item key='0' className='logo' icon={TrophyIcon()} >
			Sport Organisation
		</Menu.Item> 
		{activeTab ? 
			<>
				<Menu.Item>
					<Button type='primary' onClick={() => setActiveTab(0)}>Back</Button>
				</Menu.Item>
				{data.find((element: any) => element.key === activeTab)?.children.map((item: any) => (
					<Menu.Item key={item.key} icon={item.icon} >
						<Link to={item.path}>{item.name}</Link>
					</Menu.Item>
				))}
			</>
			: 
			data.map((item: any) => (
				<Menu.Item key={item.key} icon={item.icon} >
					<Link to={item.path} onClick={() => setActiveTab(item.key)}>{item.name}</Link>
				</Menu.Item>
			))
		}
	</Menu>

	return (
		<BrowserRouter>
			<Layout>
				<Sider trigger={null} style={{ height: '100vh' }}>	
					{dataMenu}
				</Sider>
				<Routes>  
					<Route path="/" element={<Authorization /> } />
					<Route path="/News" element={<News /> } />
					<Route path="/Tournaments" element={<Tournaments />} />
					<Route path="/Tournaments/:id" element={<TournamentInfo />} />
					<Route path="/Teams" element={<Teams />} />
					<Route path="/Teams/:id" element={<TeamInfo />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
