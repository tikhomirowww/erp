import axios from "axios";

const instance = axios.create({
	baseURL: "http://62.113.113.125/api/",
	headers: {
		Authorization: `Bearer ${
			JSON.parse(localStorage.getItem("tokens"))?.access_token
		}`,
	},
});

instance.interceptors.request.use((config) => {
	if (
		config.url.at(-1) !== "/" &&
		!config.url.includes("change_password") &&
		!config.url.includes("goal")
	) {
		config.url += "/";
	}
	return config;
});

export default instance;
