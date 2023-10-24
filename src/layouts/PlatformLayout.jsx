import { Outlet } from "react-router-dom";
import Icon from "../components/Icon";

export default function PlatformLayout() {
	return (
		<div className="flex gap-3 items-start bg-[#F9FAFC] w-screen min-h-screen p-3">
			<nav className="bg-white shadow-darken max-w-[260px] rounded-3xl p-5">
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
					<div className="py-2 flex items-center gap-2">
						<Icon name={link + "Page"} />
						{title}
					</div>
				))}
			</nav>
			<div className="shadow-darken bg-white p-5 rounded-3xl grow">
				<Outlet />
			</div>
		</div>
	);
}
