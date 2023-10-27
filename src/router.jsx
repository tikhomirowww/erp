import { createBrowserRouter, redirect } from "react-router-dom";

import PlatformLayout from "./layouts/PlatformLayout";

import ProfilePage from "./pages/Platform/ProfilePage";
import AuthPage from "./pages/AuthPage";
import NewsPage from "./pages/Platform/NewsPage";
import CreateNewsPage from "./pages/Platform/CreateNewsPage";
import EditNewsPage from "./pages/Platform/EditNews";
import ReportsPage from "./pages/Platform/ReportsPage";
import ReportPage from "./pages/Platform/ReportPage";

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
				element: <ReportsPage />,
			},
            {
				path: "reports/:id",
				element: <ReportPage />,
			},
			{
				path: "periods",
			},
			{
				path: "news",
				element: <NewsPage />,
			},
			{
				path: "news/create",
				element: <CreateNewsPage />,
			},
			{
				path: "news/edit",
				element: <EditNewsPage />,
			},
		],
	},
]);
