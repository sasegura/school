export default function Instructor({ course }) {
	return (
		<div className='single-wrappe '>
			<div
				className='team-single-item wow fadeIn'
				data-wow-duration='2s'
				data-wow-delay='.2s'
			>
				<figure>
					<div className='member-img'>
						<div className='teachars_pro'>
							<img
								src={course?.teacherPhoto}
								alt='member img'
								className='img-fluid'
							/>
						</div>
					</div>
					<figcaption>
						<div className='member-name'>
							<h4>
								<a href='' title=''>
									{course?.teacher}
								</a>
							</h4>
							<span>{course.teacherOccupation}</span>
						</div>
						<ul className='social-links list-unstyled'>
							<li className='nav-item'>
								<a href='#'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#'>
									<i className='fab fa-linkedin-in'></i>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#'>
									<i className='fab fa-instagram'></i>
								</a>
							</li>
						</ul>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
