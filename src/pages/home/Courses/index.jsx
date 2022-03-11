import Course from './Course';
import { courses } from '../utils/courses';

export default function Courses() {
	return (
		<section className='popular_cources'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<h2>Nuestros Cursos populares</h2>
						<div id='latest_blog_carousel' className='owl-carousel'>
							{courses.map((course) => (
								<Course
									key={course.id}
									course={course}
									courseName={course.name}
									teacher={course.teacher}
									description={course.description}
									price={course.price}
									image={course.image}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
