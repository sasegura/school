import { Link } from 'react-router-dom';

const Header = ({ active }) => (
	<header id='header' className='header_1 header_2'>
		<div className='header-top'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 col-xs-12 header-top-right'>
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
					<div className='col-sm-6 col-xs-12 header-top-left'>
						<ul className='d-flex '>
							<li className='nav-item'>
								<a href='#' className='nav-link sign-in js-modal-show'>
									<i className='flaticon-login-button'></i>Log In
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link join_now js-modal-show'>
									<i className='flaticon-profile'></i>Register
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='eco_nav'>
				<div className='container'>
					<nav className='navbar navbar-expand-md navbar-light bg-faded'>
						<a className='navbar-brand' href='index.html'>
							<img src='assets/images/icons/whiteLogo.png' alt='logo' />
						</a>
						<div
							className='collapse navbar-collapse main-menu'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav nav lavalamp ml-auto menu'>
								<li className='nav-item menu-item current-menu-item'>
									<a
										href='/'
										className={`nav-link ${active === 'home' && 'active'}`}
									>
										Home
									</a>
								</li>
								<li className='nav-item single_nav'>
									<Link
										to='/courses'
										className={`nav-link ${active === 'courses' && 'active'}`}
									>
										Courses
									</Link>
								</li>
								<li className='nav-item single_nav'>
									<Link
										to='/teachers'
										className={`nav-link ${active === 'teachers' && 'active'}`}
									>
										Teachers
									</Link>
								</li>
								<li className='nav-item single_nav'>
									<Link
										to='/events'
										className={`nav-link ${active === 'events' && 'active'}`}
									>
										Events
									</Link>
								</li>
								<li className='nav-item single_nav'>
									<a href='#' className='nav-link'>
										Blog
									</a>
									<ul className='navbar-nav nav mx-auto'>
										<li className='nav-item'>
											<a href='blog.html' className='nav-link'>
												Blog
											</a>
										</li>
										<li className='nav-item'>
											<a href='blog-post.html' className='nav-link'>
												Blog Post
											</a>
										</li>
									</ul>
								</li>

								<li className='nav-item'>
									<Link
										to='/contact'
										className={`nav-link ${active === 'contact' && 'active'}`}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
						<div className='mr-auto sign-in-option'>
							<ul className='navbar-nav mx-auto'>
								<li className='nav-item'>
									<i className='search_btn'>
										<img src='assets/images/search.png' alt='' />
									</i>
									<div id='search'>
										<form>
											<input
												type='search'
												placeholder='Search here....'
												required
											/>
											<button type='submit' className='btn btn_common blue'>
												Search
											</button>
										</form>
									</div>
								</li>
								<li className='nav-item'>
									<i
										className='btn-demo'
										data-toggle='modal'
										data-target='#myModal2'
									>
										<img src='assets/images/menu_icon.png' alt='' />
									</i>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
);
export default Header;
