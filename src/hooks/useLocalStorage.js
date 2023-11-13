import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue, key) {
	const getValue = () => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}

		return initialValue;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}
