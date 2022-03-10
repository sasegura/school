export default function Testimonial() {
	return (
		<section className='testimonial'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<div className='title'>
							<h2>Testimonials</h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<div id='testimonial'>
							<div className='testimonial_single'>
								<div className='member-img'>
									<img
										src='assets/images/team/team-01.jpg'
										alt='member img'
										className='img-fluid  wow zoomIn'
										data-wow-duration='2s'
										data-wow-delay='.2s'
									/>
								</div>
								<h4
									className=' wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.2s'
								>
									Devid Martin
								</h4>
								<span
									className=' wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.3s'
								>
									Guardian
								</span>
								<p
									className=' wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.4s'
								>
									I must explain to you how all this mistaken idea of denouncing
									pleasure and praising pain was born and I will give you a
									complete account of the system, and expound the actual
									teachings of the great explorer of the truth, the
									master-builder of human happiness. No one rejects, dislikes,
									or avoids pleasure itself
								</p>
							</div>
							<div className='testimonial_single'>
								<div className='member-img'>
									<img
										src='assets/images/team/team-02.jpg'
										alt='member img'
										className='img-fluid wow zoomIn'
										data-wow-duration='2s'
										data-wow-delay='.2s'
									/>
								</div>
								<h4>Nilpori Nilanjona</h4>
								<span>Guardian</span>
								<p>
									I must explain to you how all this mistaken idea of denouncing
									pleasure and praising pain was born and I will give you a
									complete account of the system, and expound the actual
									teachings of the great explorer of the truth, the
									master-builder of human happiness. No one rejects, dislikes,
									or avoids pleasure itself
								</p>
							</div>
							<div className='testimonial_single'>
								<div className='member-img'>
									<img
										src='assets/images/team/team-03.jpg'
										alt='member img'
										className='img-fluid wow zoomIn'
										data-wow-duration='2s'
										data-wow-delay='.2s'
									/>
								</div>
								<h4>Jhon Deo</h4>
								<span>Guardian</span>
								<p>
									I must explain to you how all this mistaken idea of denouncing
									pleasure and praising pain was born and I will give you a
									complete account of the system, and expound the actual
									teachings of the great explorer of the truth, the
									master-builder of human happiness. No one rejects, dislikes,
									or avoids pleasure itself
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
