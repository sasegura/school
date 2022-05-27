import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {sendMessage} from "../../connection/Api";

export default function useApplyForm({course, edition}) {
	const [selectedCourse] = useState(course);
	const [selectedEdition] = useState(edition);
	// const courses=CoursesList.courses
  const defaultValues = {
		id: 1,
		name: '',
	};

	const { handleSubmit, register } = useForm({
		defaultValues,
	});

	const onSubmit = async data => {
		try {
			const response = await sendMessage({ payload: data });
			if (response.status === 200)  console.log(data);
		} catch (e) {
			console.log(e.message)
		}
	};

  // const onSubmit = (values) => {
	// 	createOrUpdate(values);
	// 	resetForm();
	// };

  return {selectedCourse, selectedEdition, handleSubmit, register, onSubmit }
}