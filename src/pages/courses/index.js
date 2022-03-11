import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import Course from './Course';
import CoursesList from './CoursesList';

const Courses = () => {
	return (
		<div>
			<body className='loaded'>
				<Header active={'courses'} />
				<section class='sub_header_banner'>
					<div class='container'>
						<div class='row'>
							<div class='col-sm-10 col-md-12 col-lg-12'>
								<div class='intro_text'>
									<h1>Courses Style 02</h1>
									<div class='pages_linka'>
										<a href='' title=''>
											Home
										</a>
										<a href='' title='' class='active'>
											Courses 02
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class='popular_cources_2'>
					<div class='container'>
						<div class='row'>
							<CoursesList />

							{/* <div class='col-12 col-md-12 col-lg-12 d-flex justify-content-center'>
								<a href='#' title='' class='view-more-btn'>
									All Courses
								</a>
							</div> */}
						</div>
					</div>
				</section>
				<Footer />
			</body>
		</div>
	);
};
export default Courses;
