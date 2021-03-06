import axios from 'axios';

const token = localStorage.getItem('token');
export default axios.create({
	baseURL: `${process.env.API_URL}`,
	headers: {
		authorization: token || localStorage.token,
		'Access-Control-Allow-Origin': '*',
		contentType: 'application/json',
		accept: 'application/json',
	},
});
