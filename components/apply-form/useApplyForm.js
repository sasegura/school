import { useForm } from 'react-hook-form';

export default function useApplyForm({course}) {

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

  return {handleSubmit, control,onSubmit }
}