import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../utils/courses/courses';

const Footer = () => (
	<Fragment>
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
						<div className='footer_single'>
							<img
								src='assets/images/logo2.png'
								alt=''
								className='footer_logo img-fluid'
							/>
							<ul className='list-unstyled contact_info'>
								<li>codercrackschool@gmail.com</li>
								<li>Call: +34 652 41 51 09</li>
							</ul>
							<div className='social_wraper'>
								<ul className='social-items d-flex list-unstyled'>
									<li>
										<a href='#'>
											<i className='fab fa-facebook-f fb-icon'></i>
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-twitter twitt-icon'></i>
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-linkedin-in link-icon'></i>
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-instagram ins-icon'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
						<div className='footer_single footer_signle_item_2'>
							<h3 className='footer_item_title'>Nosotros</h3>
							<ul className='list-unstyled'>
								<li>
									<a href='#'>About us</a>
								</li>
								<li>
									<a href='#'>Registration</a>
								</li>
								<li>
									<a href='#'>Blog</a>
								</li>
								<li>
									<a href='#'>Events</a>
								</li>
								<li>
									<Link to='/contact' className={`nav-link `}>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
						<div className='footer_single footer_signle_item_3'>
							<h3 className='footer_item_title'>Cursos Populares</h3>
							<ul className='list-unstyled'>
								<li>
									<a href={courses[0].link}>
										{courses[0].name}
										<br />
									</a>
									<span>{courses[0].teacher}</span>
								</li>
								<li>
									<a href={courses[1].link}>
										{courses[1].name}
										<br />
									</a>
									<span>{courses[1].teacher}</span>
								</li>
								<li>
									<a href={courses[2].link}>
										{courses[2].name}
										<br />
									</a>
									<span>{courses[2].teacher}</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
						<div className='footer_single footer_signle_item_4'>
							<h3 className='footer_item_title'>Support</h3>
							<ul className='list-unstyled'>
								<li>
									<a href='#'>Documantation</a>
								</li>
								<li>
									<a href='#'>Faq</a>
								</li>
								<li>
									<a href='#'>Condition</a>
								</li>
								<li>
									<a href='#'>Release Status</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='copytight_info'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-12 col-lg-12 d-flex justify-content-between'>
							<p>Copyright &copy; Coder Crack School 2022</p>
							<ul className='nav navbar list-unstyled'>
								<li>
									<a href='#'>Terms</a>
								</li>
								<li>
									<a href='#'>Condition</a>
								</li>
								<li>
									<a href='#'>Faq</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<section id='scroll-top' className='scroll-top'>
			<h2>&nbsp;</h2>
			<div className='to-top pos-rtive'>
				<a href='#'>
					<i className='flaticon-up-arrow'></i>
				</a>
			</div>
		</section>
	</Fragment>
);
export default Footer;
