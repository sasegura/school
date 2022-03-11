export default function Course({ course }) {
	return (
		<div class='col-12 col-sm-12 col-md-6 col-lg-4'>
			<div
				class='courses_single  wow fadeIn'
				data-wow-duration='2s'
				data-wow-delay='.2s'
			>
				<div class='courses_banner_wrapper'>
					<div class='courses_banner'>
						<a href='' title=''>
							<img src={course.image} alt='' class='img-fluid' />
						</a>
					</div>
				</div>
				<div class='courses_title'>
					<h3>
						<a href='#' class=''>
							{course?.name}
						</a>
					</h3>
					<div class='teacher_pro'>
						<img src={course.teacherPhoto} alt='' class='img-fluid' />
					</div>
					<span>{course?.teacher}</span>
				</div>
				<div class='cources_rating d-flex justify-content-between'>
					<span>
						<i class='flaticon-profile'></i> 5 Student
					</span>
					<ul class='rating d-flex justify-content-center'>
						<li>
							<i class='flaticon-star'></i>
						</li>
						<li>
							<i class='flaticon-star'></i>
						</li>
						<li>
							<i class='flaticon-star'></i>
						</li>
						<li>
							<i class='flaticon-star'></i>
						</li>
						<li>
							<i class='flaticon-star'></i>
						</li>
					</ul>
					<span class='courses_price'>{course?.price}€</span>
				</div>
			</div>
		</div>
	);
}
