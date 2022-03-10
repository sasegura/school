export default function LoginModal() {
	return (
		<section className='login_signup_option'>
			<div className='l-modal is-hidden--off-flow js-modal-shopify'>
				<div className='l-modal__shadow js-modal-hide'></div>
				<div className='login_popup login_modal_body'>
					<div className='Popup_title d-flex justify-content-between'>
						<h2 className='hidden'>&nbsp;</h2>

						<div className='row'>
							<div className='col-12 col-lg-12 col-md-12 col-lg-12 login_option_btn'>
								<ul className='nav nav-tabs' role='tablist'>
									<li className='nav-item'>
										<a
											className='nav-link active'
											data-toggle='tab'
											href='#login'
											role='tab'
										>
											Login
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											data-toggle='tab'
											href='#panel2'
											role='tab'
										>
											Register
										</a>
									</li>
								</ul>
							</div>
							<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
								<div className='tab-content card'>
									<div
										className='tab-pane fade in show active'
										id='login'
										role='tabpanel'
									>
										<form action='#'>
											<div className='row'>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='form-group'>
														<label className='control-label'>Email</label>
														<input
															type='email'
															className='form-control'
															placeholder='Username'
														/>
													</div>
												</div>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='form-group'>
														<label className='control-label'>Password</label>
														<input
															type='password'
															className='form-control'
															placeholder='Password'
														/>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between login_option'>
													<a href='' title='' className='forget_pass'>
														Forget Password ?
													</a>
													<button
														type='submit'
														className='btn btn-default login_btn'
													>
														Login
													</button>
												</div>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='social_login'>
														<div className='social_items'>
															<button className='google_login google'>
																Login Google
															</button>
															<button className='google_login facebook'>
																Login Facebook
															</button>
															<button className='google_login twitter'>
																Login Twitter
															</button>
															<button className='google_login linkdin'>
																Login Linkdin
															</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>

									<div className='tab-pane fade' id='panel2' role='tabpanel'>
										<form action='#' className='register'>
											<div className='row'>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='form-group'>
														<label className='control-label'>Name</label>
														<input
															type='text'
															className='form-control'
															placeholder='Username'
														/>
													</div>
												</div>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='form-group'>
														<label className='control-label'>Email</label>
														<input
															type='email'
															className='form-control'
															placeholder='Email'
														/>
													</div>
												</div>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12'>
													<div className='form-group'>
														<label className='control-label'>Password</label>
														<input
															type='password'
															className='form-control'
															placeholder='Password'
														/>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between login_option'>
													<button
														type='submit'
														className='btn btn-default login_btn'
													>
														Register
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
