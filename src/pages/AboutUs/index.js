import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
const AboutUs = () => {
	return (
		<div className='contact_page'>
			<div className='loaded'>
				<Header active={'contact'} />
				<section className='sub_header_banner'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-10 col-md-12 col-lg-12'>
								<div className='intro_text'>
									<h1>Contact Page</h1>
									<div className='pages_linka'>
										<a href='' title=''>
											Home
										</a>
										<a href='' title='' className='active'>
											Contact
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='contact_info_wrapper'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 col-sm-12 col-md-12 col-lg-8 p-0'>
								<div className='event_details'>
									<div className='details_title'>
										<h3>Get In Touch</h3>
									</div>
									<div className='event_location_info'>
										<ul className='list-unstyled'>
											<li>
												<p className='hall_location'>Location</p>
											</li>
											<li>
												<p>12/A New street jercy</p>
												<span>
													Campus Way NE Bothell
													<br /> Kingtown, United Kingdom
												</span>
											</li>
											<li>
												<p>Email</p>
												<span>ecostudynews@gmail.com</span>
											</li>
											<li>
												<p>Phone</p>
												<span>+77 0251 215 1235</span>
												<br />
												<span>+77 0251 215 1235</span>
											</li>
										</ul>
										<img
											src='images/shape/contact.png'
											alt=''
											className='contact__info_shpae'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='info_banner'>
						<div className='container-fluid'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-12 col-lg-6 ml-auto p-0'>
									<img src='images/contact1.png' alt='' className='img-fluid' />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='contact_form'>
					<div className='contact_map'>
						<div className='container-fluid'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-12 col-lg-6 mr-auto p-0'>
									<div className='google_map'>
										<div className='gmap'>
											<div id='map'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='leave_comment_wrapper'>
						<div className='container'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-12 col-lg-6 ml-auto p-0'>
									<div className='leave_comment'>
										<h3 className='title'>Contact with us</h3>
										<div id='message'></div>
										<form
											method='post'
											action='contact.php'
											name='contactform'
											id='contactform'
										>
											<div className='row'>
												<div className='col-12 col-sm-12 col-md-12 form-group'>
													<input
														type='text'
														className='form-control'
														placeholder='Your Name'
														name='name'
														id='name'
													/>
												</div>
												<div className='col-12 col-sm-12 col-md-12 form-group'>
													<input
														type='email'
														className='form-control'
														placeholder='Email'
														name='email'
														id='email'
													/>
												</div>
												<div className='col-12 col-sm-12 col-md-12 form-group'>
													<input
														type='text'
														className='form-control'
														placeholder='Subject'
														name='subject'
														id='subject'
													/>
												</div>
												<div className='col-12 col-sm-12 col-md-12 form-group'>
													<textarea
														className='form-control'
														placeholder='Message'
														name='comments'
														id='comments'
													></textarea>
												</div>

												<div className='col-12 col-sm-12 col-md-12 submit-btn'>
													<button
														type='submit'
														className='text-center'
														name='submit'
														id='submit'
													>
														Send
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
};
export default AboutUs;
