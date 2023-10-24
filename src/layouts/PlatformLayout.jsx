import { NavLink, Outlet } from "react-router-dom";
import Icon from "../components/Icon";
import clsx from "clsx";

export default function PlatformLayout() {
	return (
		<div className="flex gap-3 items-start bg-[#F9FAFC] w-screen min-h-screen p-3">
			<nav className="bg-white shadow-darken max-w-[265px] rounded-3xl p-5 flex flex-col gap-1">
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
						title: "Пользователи и роли",
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
								"py-2 px-3 flex items-center gap-2 cursor-pointer rounded-xl hover:bg-light transition-colors",
								{
									"active-menu-link": isActive,
								},
							)
						}>
						<Icon name={link + "Page"} />
						<span className="text-[#505154] font-medium leading-[125%]">
							{title}
						</span>
					</NavLink>
				))}
			</nav>
			<div className="shadow-darken bg-white p-5 rounded-3xl grow">
				<Outlet />
			</div>
		</div>
	);
}
