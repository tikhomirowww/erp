import { Outlet } from "react-router-dom";
import Icon from "../components/Icon";

export default function PlatformLayout() {
	return (
		<div className="bg-[#F9FAFC] w-screen min-h-screen">
			<nav>
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
					<div>
						<Icon name={link + "Page"} />
						{title}
					</div>
				))}
			</nav>
			<Outlet />
		</div>
	);
}
