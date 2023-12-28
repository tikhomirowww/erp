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
		return error;
	}
}

/* [USER PROFILE] */
export async function get_user() {
	try {
		return await axios.get("profile");
	} catch (error) {
		console.log(error);
	}
}

export async function get_full_user() {
	try {
		return await axios.get("account/user-profile/");
	} catch (error) {
		console.log(error);
	}
}

export async function change_password(current_password, new_password) {
	try {
		return await axios.post("profile/change_password/", {
			current_password,
			new_password,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function edit_profile(field, value) {
	try {
		return await axios.patch("profile/edit-profile", {
			[field]: value,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function edit_role(role) {
	try {
		return await axios.patch("profile/edit-role", {
			role,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function change_photo(photo) {
	try {
		if (photo) {
			const reader = new FileReader();

			reader.onload = async (e) => {
				const base64String = e.target.result;
				// Now you can use the base64String as needed
				console.log("Base64:", base64String);
				console.log(photo, "photo");
				await axios.patch("profile/change_profile_photo", {
					photo: base64String,
				});
			};

			reader.readAsDataURL(photo);
		}

		// return await axios.patch("profile/change_profile_photo", {
		// 	photo,
		// });
	} catch (error) {
		console.log(error);
	}
}

export async function get_all_users() {
	try {
		return await axios.get("profile/get_all_person");
	} catch (error) {
		console.log(error);
	}
}

/* [NEWS] */

export async function get_news() {
	try {
		return await axios.get("news");
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

// [RESULTS FOR PERIODS]

/* [PERIODS] */
export async function get_periods() {
	try {
		return await axios.get("periods");
	} catch (error) {
		console.log(error);
	}
}

export async function add_period(start_date, end_date, title, goal_id) {
	try {
		return await axios.post("periods", {
			start_date,
			end_date,
			title,
			goals: goal_id,
		});
	} catch (error) {
		console.log(error);
	}
}

// GOALS

export async function add_metrics(newPeriod) {
	try {
		console.log(newPeriod);
		return await axios.post("periods", {
			...newPeriod,
			start_date: newPeriod.startDate,
			end_date: newPeriod.endDate,
			goals: newPeriod.id,
		});
	} catch (error) {
		console.log(error);
	}
}

// RESULTS

export async function get_results() {
	try {
		return await axios.get("home_page/general-results");
	} catch (error) {
		console.log(error);
	}
}
