import { Link, Outlet } from 'react-router-dom';
import Header from './components/header/Header';

// компонент, в который мы прокидываем элементы меню
// они прокидываются через компонент Outlet
const Layout = () => {
	return (
		<div>
            <Header/>
            <Outlet/>
		</div>
	)
}

export {Layout}