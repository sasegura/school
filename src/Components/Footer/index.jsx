import { Fragment } from 'react';

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
								<li>hello@ecotheme.com</li>
								<li>Call: +88 7380 254 025</li>
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
							<h3 className='footer_item_title'>Talk to Us</h3>
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
									<a href='#'>Contact</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-3'>
						<div className='footer_single footer_signle_item_3'>
							<h3 className='footer_item_title'>Popular Courses</h3>
							<ul className='list-unstyled'>
								<li>
									<a href='#'>
										Ecommerce Course
										<br />
									</a>
									<span>Jony miah</span>
								</li>
								<li>
									<a href='#'>
										Learn Ui/UX
										<br />
									</a>
									<span>Nanson Dvil</span>
								</li>
								<li>
									<a href='#'>
										Motion Design
										<br />
									</a>
									<span>Alex Hope</span>
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
							<p>Copyright &copy; Getnajmul 2018</p>
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
