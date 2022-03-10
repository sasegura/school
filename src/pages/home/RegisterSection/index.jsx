export default function RegisterSection() {
	return (
		<section className='register_area'>
			<div className='overlay-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-6 col-lg-7 form-content'>
							<p
								className=' wow fadeInUp'
								data-wow-duration='2s'
								data-wow-delay='.1s'
							>
								Joni to the Advance Workshop
							</p>
							<h2
								className=' wow fadeInUp'
								data-wow-duration='2s'
								data-wow-delay='.2s'
							>
								Training in advance <br />
								Networking
							</h2>
						</div>
						<div className='col-12 col-sm-12 col-md-6 col-lg-5'>
							<div className='row'>
								<div
									className='form-full-box wow fadeInRight'
									data-wow-duration='2s'
									data-wow-delay='.1s'
								>
									<div className='form_title'>
										<h2>Apply Now</h2>
									</div>
									<form>
										<div className='register-form'>
											<div className='row'>
												<div className='col-12 col-xs-12 col-md-12'>
													<div className='form-group'>
														<input
															className='form-control'
															name='name'
															placeholder='Name'
															required=''
															type='text'
														/>
													</div>
												</div>

												<div className='col-12 col-xs-12 col-md-12'>
													<div className='form-group'>
														<input
															className='form-control'
															name='email'
															placeholder='Email'
															required=''
															type='email'
														/>
													</div>
												</div>
												<div className='col-12 col-xs-12 col-md-12'>
													<div className='form-group'>
														<input
															className='form-control'
															name='phone'
															placeholder='Phone Number'
															required=''
															type='text'
														/>
													</div>
												</div>
												<div className='col-12 col-xs-12 col-md-12 register-btn-box'>
													<button className='register-btn' type='submit'>
														Register
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
