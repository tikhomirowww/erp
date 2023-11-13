import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import Context from "./Context";

import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Context>
		<RouterProvider router={router} />
	</Context>,
);
