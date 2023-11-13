import axios from "axios";

const instance = axios.create({
	baseURL: "http://62.113.113.125/api/",
	headers: {
		Authorization: `Bearer ${
			JSON.parse(localStorage.getItem("tokens"))?.access_token
		}`,
	},
});

instance.interceptors.request.use(config => {
	if (config.url.at(-1) !== "/") {
		config.url += "/";
	}
	return config;
});

export default instance;
