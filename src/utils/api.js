import axios from "./axios";

/* [AUTH] */

export async function check_token() {
	try {
		const response = await axios.get("/");
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function refresh_token(refresh_token) {
	try {
		const response = await axios.post("account/refresh", {
			refresh: refresh_token,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function login(email, password) {
	try {
		const response = await axios.post("account/login", { email, password });
		return response;
	} catch (error) {
		console.log(error);
        return error
	}
}

/* [USER PROFILE] */
export async function get_user() {
	try {
		const response = await axios.get("profile");
		return response;
	} catch (error) {
		console.log(error);
	}
}

/* [NEWS] */

export async function get_news() {
	try {
		const response = await axios.get("news");
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function create_news(title, text, pub_date, image) {
	try {
		let body = {
			title,
			text,
			pub_date,
			image,
		};
		let bodyFormData = new FormData({ title, text, pub_date });

		for (let bodyKey in body) FormData.append(bodyKey, body[bodyKey]);

		const response = await axios.post("news/create-news", bodyFormData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function delete_news(news_id) {
	try {
		const response = await axios.delete(`news/delete-news/${news_id}`);
		return response;
	} catch (error) {
		console.log(error);
	}
}
