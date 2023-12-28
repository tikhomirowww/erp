import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { router } from "./router";

import Context from "./Context";

import "./assets/styles/main.css";
import PeriodsContext from "./PeriodsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<PeriodsContext>
		<Context>
			<RouterProvider router={router} />
		</Context>
	</PeriodsContext>,
);
