import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Teachers from './pages/teachers';
import Courses from './pages/courses';
import Events from './pages/event';
import CourseDetail from './pages/courses/CourseDetail';
import AboutUs from './pages/AboutUs';

const PageRoutes = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/teachers' element={<Teachers />} />
					<Route path='/events' element={<Events />} />
					<Route path='/contact' element={<AboutUs />} />
					<Route path='/course/:courseId' element={<CourseDetail />} />
				</Routes>
			</Router>
		</div>
	);
};

export default PageRoutes;
