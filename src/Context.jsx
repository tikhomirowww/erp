import { createContext, useEffect, useState } from "react";

import useLocalStorage from "./hooks/useLocalStorage";

import { check_token, refresh_token } from "./utils/api";

export const ContextApp = createContext();

function Context({ children }) {
	const [tokens, setTokens] = useLocalStorage({}, "tokens");

	const [auth, setAuth] = useState("loading");

	useEffect(() => {
		check_token().then(res => {
			if (res?.statusText === "OK") {
				setAuth("yes");
			} else {
				if (tokens?.access_token && tokens?.refresh_token) {
					refresh_token(tokens.refresh_token).then(res => {
						if (res?.statusText === "OK") {
							setTokens({
                                ...tokens,
								access_token: res.data.access
							});
							setAuth("yes");
						} else {
							setAuth("no");
						}
					});
				} else {
					setAuth("no");
				}
			}
		});
	}, []);

	return (
		<ContextApp.Provider value={{ auth, setAuth }}>
			{children}
		</ContextApp.Provider>
	);
}

export default Context;
