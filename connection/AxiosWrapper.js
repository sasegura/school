import axios from 'axios';

const apiHost = 'https://coder-crack-api-lvhtf.ondigitalocean.app';

const axiosWrapper = () => {
	const defaultOptions = {
		baseURL: apiHost,

		headers: {
			accept: 'application/json',

			'Content-Type': 'application/json',
			// 'x-api-key': process.env.REACT_APP_x_api_key_config,
		},
	};

	const instance = axios.create(defaultOptions);

	// instance.interceptors.request.use(function (config) {
	// 	const storage = JSON.parse(localStorage.getItem('codercrack'));

	// 	const auth = storage?.auth ? JSON.parse(storage.auth) : '';

	// 	const token = auth?.token ? auth?.token : '';

	// 	config.headers.Authorization = token || '';

	// 	return config;
	// });

	// instance.interceptors.response.use(
	// 	function (config) {
	// 		return config;
	// 	},
	// 	function (error) {
	// 		if (error.response.status === 401) {
	// 			return (window.location.href = '/login');
	// 		}
	// 		throw error;
	// 	}
	// );

	return instance;
};

export default axiosWrapper();
