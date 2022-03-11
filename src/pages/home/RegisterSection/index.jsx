export default function RegisterSection() {
	return (
		<section className='register_area'>
			<div className='overlay-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-6 col-lg-7 form-content'>
							<h2
								className=' wow fadeInUp'
								data-wow-duration='2s'
								data-wow-delay='.2s'
							>
								Coder Crack School <br />
							</h2>
							<p
								className=' wow fadeInUp'
								data-wow-duration='2s'
								data-wow-delay='.1s'
							>
								Escuela Europea de Programación
							</p>
						</div>
						<div className='col-12 col-sm-12 col-md-6 col-lg-5'>
							<div className='row'>
								<div
									className='form-full-box wow fadeInRight'
									data-wow-duration='2s'
									data-wow-delay='.1s'
								>
									<div className='form_title'>
										<h2>Contáctanos</h2>
									</div>
									<form>
										<div className='register-form'>
											<div className='row'>
												<div className='col-12 col-xs-12 col-md-12'>
													<div className='form-group'>
														<input
															className='form-control'
															name='name'
															placeholder='Nombre'
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
															placeholder='Correo'
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
															placeholder='Número de teléfono'
															required=''
															type='text'
														/>
													</div>
												</div>
												<div className='col-12 col-xs-12 col-md-12 register-btn-box'>
													<button className='register-btn' type='submit'>
														Regístrate
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
