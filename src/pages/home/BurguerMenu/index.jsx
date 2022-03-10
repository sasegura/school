export default function MenuBurguer() {
	return (
		<section className='demo'>
			<div
				className='modal right fade'
				id='myModal2'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='myModalLabel2'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<i className='flaticon-close'></i>
								</span>
							</button>
							<h2 className='modal-title' id='myModalLabel2'>
								<a href='#'>
									<img src='assets/images/logo.png' alt='' />
								</a>
								<span className='disabled'></span>
							</h2>
						</div>
						<div className='modal-body'>
							<div className='bar-nav'>
								<div className='bar-top'>
									<h2>Important Links</h2>
									<ul>
										<li>
											<a href='index.html'>
												About us
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Registration
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Available Courses
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Become An Instructor
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Events
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Blogs
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Pages
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												All teacher
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Account
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Programs
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												Gallery
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
										<li>
											<a href='index.html'>
												FaQ
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='bar-contact'>
								<span>Contact</span>
								<span>+1-202-555-0176</span>
								<span>apply@ecostudy.com</span>
							</div>

							<div className='bar-icon'>
								<div className='serach_option widget_single'>
									<form>
										<input
											type='text'
											name='Name'
											className='input-c'
											placeholder='Name'
										/>
										<button type='submit'>
											<i className='fas fa-paper-plane'></i>
										</button>
									</form>
								</div>
								<ul className='social_items d-flex'>
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
				</div>
			</div>
		</section>
	);
}
