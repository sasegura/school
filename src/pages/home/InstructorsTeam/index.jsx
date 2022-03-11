import { courses } from '../../../utils/courses/courses';
import Instructor from './instructor';

export default function InstructorsTeam() {
	return (
		<section className='our_instructors'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<div className='title'>
							<h2>Profesores Increibles</h2>
							<p>
								Contamos con un equipo de profesores con experiencia en el
								sector de las TIC, que te ayudarán a formarte profesionalmente
							</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<div id='team_01' className='owlCarousel'>
							{courses.map((course) => (
								<Instructor key={course.id} course={course} />
							))}
						</div>
					</div>
				</div>
			</div>
			<img
				src='assets/images/shape_1.png'
				alt=''
				className='shape_instructor'
			/>
		</section>
	);
}
