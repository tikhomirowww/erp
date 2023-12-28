import axios from "./utils/axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const periodsContext = createContext();
export const usePeriods = () => useContext(periodsContext);

const INIT_STATE = {
	user: null,
	all_metrics: [],
	metrics: [],
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_METRICS":
			return { ...state, metrics: action.payload };
		case "GET_ALL_METRICS":
			console.log(action.payload, "payload");
			return { ...state, all_metrics: action.payload };
		case "GET_USER":
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

const PeriodsContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	// const [results, setResults]

	async function get_metrics(title, start, end) {
		try {
			const { data } = await axios.get(
				`goal/get_list_goal/?start_date=${start}&end_date=${end}&title=${title}`,
			);
			console.log(data, "data");
			dispatch({
				type: "GET_METRICS",
				payload: data,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function get_all_metrics() {
		try {
			const { data } = await axios.get("goal/");
			console.log(data, "data");
			dispatch({
				type: "GET_ALL_METRICS",
				payload: data,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function edit_metric(id, field, payload) {
		try {
			await axios.patch(`goal/${id}/`, { [field]: payload });
			// get_metrics();
		} catch (error) {
			console.log(error);
		}
	}

	async function get_user() {
		try {
			const { data } = await axios.get("profile");
			dispatch({
				type: "GET_USER",
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	}

	// async function get_periods() {
	// 	try {
	// 		return await axios.get(`periods`);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// async function get_results_for_periods(start_date, end_date) {
	// 	try {
	// 		return await axios.get(
	// 			`home-page/results-for-period?start_date=${start_date}&end_date=${end_date}`,
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	return (
		<periodsContext.Provider
			value={{
				get_metrics,
				edit_metric,
				metrics: state.metrics,
				user: state.user,
				get_user,
				get_all_metrics,
				all_metrics: state.all_metrics,
			}}
		>
			{children}
		</periodsContext.Provider>
	);
};

export default PeriodsContext;
