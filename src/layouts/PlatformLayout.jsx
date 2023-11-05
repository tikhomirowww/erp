import { NavLink, Outlet, useHref } from "react-router-dom";
import clsx from "clsx";

import Icon from "../components/Icon";
import { useEffect, useState } from "react";

export default function PlatformLayout() {
	const href = useHref();

	const [canGrowHeight, setCanGrowHeight] = useState(false);

	useEffect(() => {
		setCanGrowHeight((href.split("/")[2] === "profile") || (href.split("/")[2] === "metrics"));
	}, [href]);

	return (
		<div className={clsx('flex gap-3 bg-[#F9FAFC] w-screen min-h-screen p-3 lg:flex-col', !canGrowHeight && 'items-start')}>
			<nav className="bg-white shadow-darken max-w-[265px] w-full rounded-3xl p-5 flex flex-col gap-1 lg:flex-row lg:max-w-none lg:justify-between md:p-1.5 md:gap-0 md:rounded-xl self-start">
				{[
					{
						title: "Главная",
						link: "home",
					},
					{
						title: "Профиль",
						link: "profile",
					},
					{
						title: "Метрики",
						link: "metrics",
					},
					{
						title: "Юзеры",
						link: "users",
					},
					{
						title: "Отчеты",
						link: "reports",
					},
					{
						title: "Периоды",
						link: "periods",
					},
					{
						title: "Новости",
						link: "news",
					},
				].map(({ title, link }) => (
					<NavLink
						to={`/platform/${link}`}
						className={({ isActive }) =>
							clsx(
								"py-2 px-3 flex items-center gap-2 cursor-pointer rounded-xl hover:bg-light transition-colors lg:flex-col md:rounded-lg md:gap-1 sm:px-1.5",
								{
									"active-menu-link": isActive,
								},
							)
						}>
						<Icon name={link + "Page"} />
						<span className="text-secondaryDark font-medium leading-[125%] md:text-[10px] sm:hidden">
							{title}
						</span>
					</NavLink>
				))}
			</nav>
			<div className={clsx("shadow-darken bg-white p-5 rounded-3xl grow w-full relative md:rounded-xl max-w-full overflow-hidden", !canGrowHeight && 'self-start')}>
				<img
					src={"/images/decor-2.png"}
					alt="Декор"
					className="absolute bottom-0 right-0"
				/>
				<div className="relative z-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
