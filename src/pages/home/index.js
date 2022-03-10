import React, { Fragment } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import BannerSlide from './BannerSlide';
import MenuBurguer from './BurguerMenu';
import Courses from './Courses';
import Events from './Events';
import InstructorsTeam from './InstructorsTeam';
import LoginModal from './LoginModal';
import RegisterSection from './RegisterSection';
import Sponsors from './Sponsors';
import TakeATour from './TakeATour';
import Testimonial from './Testimonial';

const Home = () => {
	return (
		<Fragment>
			<div className='loaded'>
				<Header active={'home'} />
				<div id='loader-wrapper'>
					<div id='loader'></div>
					<div className='loader-section section-left'></div>
					<div className='loader-section section-right'></div>
				</div>

				<BannerSlide />

				<LoginModal />

				<MenuBurguer />

				<Courses />

				<RegisterSection />

				<Events />

				<InstructorsTeam />

				<TakeATour />

				<Testimonial />

				<Sponsors />

				<Footer />
			</div>
		</Fragment>
	);
};
export default Home;
