import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../../components/ProgressBar";
import Reward from "../../components/Reward";
import UserInfoRow from "../../components/UserInfoRow";
import Loader from "../../components/Loader";

import { get_user } from "../../utils/api";

import useLocalStorage from "../../hooks/useLocalStorage";

import { ContextApp } from "../../Context";

export default function ProfilePage() {
	const { setAuth } = useContext(ContextApp);

	const [authData, setAuthData] = useLocalStorage({}, "auth_data");

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		get_user().then(res => {
			setUser(res.data);
			setLoading(false);
		});
	}, []);

	const handleExit = () => {
		localStorage.removeItem("tokens");
		localStorage.removeItem("auth_data");
		setAuth("no");
		setTimeout(() => {
			navigate("/auth");
		}, 600);
	};

	const MEDALS = [
		"crystal",
		"diamond",
		"citrine",
		"amethyst",
		"sapphire",
		"emerald",
		"agate",
		"amber",
		"garnet",
		"spinel",
		"topaz",
		"ruby",
	];

	return (
		<section className="flex items-start gap-[100px] xl:gap-[56px] md:flex-col md:items-stretch">
			{user ? (
				<>
					<div>
						<div>
							<div
								className="w-[100px] h-[100px] rounded-xl relative"
								style={{
									background: `url("/images/user.jpg") no-repeat center / cover`,
								}}>
								<div
									className="absolute bottom-[-5px] right-[-5px] w-7 h-7 bg-red-500 rounded-md flex-middle cursor-pointer hover:opacity-90 transition-opacity"
									onClick={handleExit}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.707 2.40894C9 3.03594 9 4.18294 9 6.47594V17.5239C9 19.8169 9 20.9639 9.707 21.5909C10.414 22.2179 11.495 22.0299 13.657 21.6529L15.987 21.2469C18.381 20.8289 19.578 20.6199 20.289 19.7419C21 18.8629 21 17.5929 21 15.0519V8.94794C21 6.40794 21 5.13794 20.29 4.25894C19.578 3.38094 18.38 3.17194 15.986 2.75494L13.658 2.34794C11.496 1.97094 10.415 1.78294 9.708 2.40994L9.707 2.40894ZM12 10.1689C12.414 10.1689 12.75 10.5199 12.75 10.9529V13.0469C12.75 13.4799 12.414 13.8309 12 13.8309C11.586 13.8309 11.25 13.4799 11.25 13.0469V10.9529C11.25 10.5199 11.586 10.1689 12 10.1689Z"
											fill="white"
										/>
										<path
											d="M7.547 4.5C5.489 4.503 4.416 4.548 3.732 5.232C3 5.964 3 7.142 3 9.5V14.5C3 16.857 3 18.035 3.732 18.768C4.416 19.451 5.489 19.497 7.547 19.5C7.5 18.876 7.5 18.156 7.5 17.377V6.623C7.5 5.843 7.5 5.123 7.547 4.5Z"
											fill="white"
										/>
									</svg>
								</div>
							</div>
							<div className="flex gap-6 items-center mt-3 mb-2 xl:flex-col xl:items-start xl:gap-2">
								<h6 className="text-dark font-bold leading-[150%] w-[180px]">
									{user.first_name} {user.last_name}
								</h6>
								<div className="flex items-center gap-1.5">
									{user.days_without_skip >= 10 &&
										user.days_without_skip < 50 && (
											<Reward
												type="coin/10"
												width={32}
												height={32}
											/>
										)}
									{user.days_without_skip >= 50 &&
										user.days_without_skip < 100 && (
											<Reward
												type="coin/50"
												width={32}
												height={32}
											/>
										)}
									{user.days_without_skip >= 100 && (
										<Reward
											type="coin/100"
											width={32}
											height={32}
										/>
									)}
									{user.medals.length > 0 && (
										<Reward
											type={`jewelry/${
												user.medals.length >= 12
													? "ruby"
													: MEDALS[
															user.medals.length -
																1
													  ]
											}`}
											width={32}
											height={32}
										/>
									)}
								</div>
							</div>
							<div className="text-white text-xs font-medium leading-[16px] px-2 py-1 rounded bg-dark inline-block">
								Модератор
							</div>
						</div>
						<ul className="mt-8 flex flex-col gap-3">
							<UserInfoRow
								label="Дата рождения"
								text="21.01.1990"
							/>
							<UserInfoRow label="Логин" text="constantinopol" />
							<UserInfoRow
								label="Пароль"
								text={window
									.atob(authData.password)
									.replace(/./g, "*")}
								canChange
							/>
							{user.telegram_username && (
								<UserInfoRow
									label="Telegram"
									text={`@${user.telegram_username}`}
									canDelete
								/>
							)}
							<UserInfoRow label="Email" text={user.user} />
						</ul>
					</div>
					<div className="flex flex-col gap-16 md:grow">
						<ProgressBar
							label={"Дней без пропусков"}
							currentValue={user.days_without_skip}
							maxValue={
								user.days_without_skip > 100
									? user.days_without_skip
									: 100
							}
							extraItems={"coins"}
						/>
						<ProgressBar
							label={"Выполненные планы за период"}
							currentValue={user.medals.length}
							maxValue={
								user.medals.length > 12
									? user.medals.length
									: 12
							}
							extraItems={"jewelries"}
						/>
					</div>
				</>
			) : (
				<Loader trigger={loading} />
			)}
		</section>
	);
}
