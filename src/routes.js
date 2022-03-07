import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Teachers from './pages/teachers';
import Courses from './pages/courses';
import Header from './Components/Header/Header';
import Events from './pages/event';

const PageRoutes = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/teachers' element={<Teachers />} />
					<Route path='/events' element={<Events />} />
				</Routes>
			</Router>
		</div>
	);
};

export default PageRoutes;
