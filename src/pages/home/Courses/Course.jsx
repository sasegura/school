const Course = ({ course, courseName, teacher, description, price, image }) => (
	<div
		className='review_singel wow fadeIn'
		data-wow-duration='2s'
		data-wow-delay='.5s'
	>
		<div className='blog-img'>
			<img src={`${image}`} alt='' className='img-fluid' />
		</div>
		<div className='blog-title'>
			<div className='shape'></div>
			<h3>
				<a href={course.link} title=''>
					{courseName}
				</a>
			</h3>
			<span>Profesor- {teacher}</span>
			<p>{description}</p>
			<div className='cources_btn d-flex justify-content-between'>
				<a href='' title='' className='apply_btn'>
					Matricularse
					<i className='flaticon-angle-arrow-pointing-to-right'></i>
				</a>
				<span>{price}€</span>
			</div>
		</div>
	</div>
);
export default Course;
