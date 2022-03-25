import { CoursesList } from '@/courses';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useApplyForm({course}) {
	const [selectedCourse, setSelectedCourse]=useState(course)
	const courses=CoursesList.courses
  const defaultValues = {
		id: 1,
		name: '',
	};

	const { handleSubmit, control, reset, setValue, watch } = useForm({
		defaultValues,
	});

  const onSubmit = (values) => {
		createOrUpdate(values);
		resetForm();
	};

  return {selectedCourse, courses, handleSubmit, control,onSubmit }
}