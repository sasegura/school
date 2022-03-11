import { courses } from '../../home/utils/courses';
import Course from '../Course';

export default function CoursesList() {
	return courses.map((course) => <Course course={course} />);
}
