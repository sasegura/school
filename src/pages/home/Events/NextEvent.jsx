const NextEvent = ({ name, day, month, description, image, detail }) => (
	<div className='col-12 col-sm-12 col-md-6 col-lg-6 p-0'>
		<div
			className='event_single wow fadeIn'
			data-wow-duration='2s'
			data-wow-delay='.2s'
		>
			<div className='event_img'>
				<img
					src={`assets/images/courses/${image}`}
					alt=''
					className='img-fluid'
				/>
				<div className='event_content'>
					<div className='event_date'>
						{day} <span>{month}</span>
					</div>
					<div className='single_event_title'>
						<h3>
							<a href='' title=''>
								{name}
							</a>
						</h3>
						<div className='shape'></div>
					</div>
					<p>
						{description}
						<br />
						{detail}
					</p>
				</div>
			</div>
		</div>
	</div>
);
export default NextEvent;
