import { createBrowserRouter, redirect } from "react-router-dom";

import ProfilePage from "./pages/Platform/ProfilePage";

import AuthPage from "./pages/AuthPage";
import PlatformLayout from "./layouts/PlatformLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		loader: () => redirect("/auth"),
	},
	{
		path: "/auth",
		element: <AuthPage />,
	},
	{
		path: "/platform",
		element: <PlatformLayout />,
		children: [
			{
				path: "home",
			},
			{
				path: "profile",
				element: <ProfilePage />,
			},
			{
				path: "metrics",
			},
			{
				path: "users",
			},
			{
				path: "reports",
			},
			{
				path: "periods",
			},
			{
				path: "news",
			},
		],
	},
]);
