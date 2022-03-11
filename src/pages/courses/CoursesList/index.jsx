import { courses } from '../../../utils/courses/courses';
import Course from '../Course';

export default function CoursesList() {
	return courses.map((course) => <Course course={course} />);
}
