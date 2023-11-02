import { createBrowserRouter, redirect } from "react-router-dom";

/* [LAYOUTS] */
import PlatformLayout from "./layouts/PlatformLayout";

/* [PAGES] */
import AuthPage from "./pages/AuthPage";

import HomePage from "./pages/Platform/HomePage";

import ProfilePage from "./pages/Platform/ProfilePage";

import NewsPage from "./pages/Platform/News/NewsPage";
import AddNewsPage from "./pages/Platform/News/AddNewsPage";
import EditNewsPage from "./pages/Platform/News/EditNews";

import ReportsPage from "./pages/Platform/Reports/ReportsPage";
import ReportPage from "./pages/Platform/Reports/ReportPage";

import MetricsPage from "./pages/Platform/Metrics/MetricsPage";
import AddMetricPage from "./pages/Platform/Metrics/AddMetricPage";
import EditMetricPage from "./pages/Platform/Metrics/EditMetricPage";

import PeriodsPage from "./pages/Platform/Periods/PeriodsPage";
import AddPeriodPage from "./pages/Platform/Periods/AddPeriodPage";

import UsersPage from "./pages/Platform/Users/UsersPage";
import EditUserPage from "./pages/Platform/Users/EditUserPage";

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
				element: <HomePage />,
			},
			{
				path: "profile",
				element: <ProfilePage />,
			},
			{
				path: "metrics",
				element: <MetricsPage />,
			},
            {
				path: "metric/add",
				element: <AddMetricPage />,
			},
            {
				path: "metric/edit",
				element: <EditMetricPage />,
			},
			{
				path: "users",
                element: <UsersPage/>
			},
            {
				path: "user/edit",
                element: <EditUserPage/>
			},
			{
				path: "reports",
				element: <ReportsPage />,
			},
			{
				path: "report",
				element: <ReportPage />,
			},
			{
				path: "periods",
                element: <PeriodsPage/>
			},
            {
				path: "period/add",
                element: <AddPeriodPage/>
			},
			{
				path: "news",
				element: <NewsPage />,
			},
			{
				path: "news/add",
				element: <AddNewsPage />,
			},
			{
				path: "news/edit",
				element: <EditNewsPage />,
			},
		],
	},
]);
