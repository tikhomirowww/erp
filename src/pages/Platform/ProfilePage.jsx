import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../../components/ProgressBar";
import Reward from "../../components/Reward";
import UserInfoRow from "../../components/UserInfoRow";
import Loader from "../../components/Loader";

import { MdInsertPhoto } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

import {
	change_password,
	change_photo,
	edit_profile,
	edit_role,
	get_full_user,
	// get_user,
} from "../../utils/api";

import useLocalStorage from "../../hooks/useLocalStorage";

import { ContextApp } from "../../Context";
import toast from "react-hot-toast";
import { usePeriods } from "../../PeriodsContext";

export default function ProfilePage() {
	const { setAuth } = useContext(ContextApp);

	const [authData, setAuthData] = useLocalStorage({}, "auth_data");

	// const [user, setUser] = useState(null);

	const [test, setTest] = useState(null);

	const [roleSwitch, setRoleSwitch] = useState(false);

	const [loading, setLoading] = useState(true);
	const [changingPassword, setChangingPassword] = useState({
		state: false,
		currentPassword: "",
		newPassword: "",
	});

	const [menu, setMenu] = useState(false);

	const [newImage, setNewImage] = useState("");

	const [selected, setSelected] = useState(null);

	const navigate = useNavigate();

	// console.log(window.atob(authData.password));

	const { get_user, user } = usePeriods();

	useEffect(() => {
		get_user().then((res) => {
			// setUser(res.data);
			setChangingPassword((prevState) => ({
				...prevState,
				newPassword: window.atob(authData.password),
				currentPassword: window.atob(authData.password),
			}));
			setLoading(false);
		});
	}, [newImage]);

	useEffect(() => {
		console.log(user, "user");
	}, [user]);

	useEffect(() => {
		get_full_user().then((res) => {
			setTest(res.data);
			setChangingPassword((prevState) => ({
				...prevState,
				newPassword: window.atob(authData.password),
				currentPassword: window.atob(authData.password),
			}));
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

	const roles = [
		{ value: "owner", title: "Владелец" },
		{ value: "admin", title: "Администратор" },
		{ value: "user", title: "Cотрудник" },
	];

	useEffect(() => {
		{
			user &&
				(setSelected({
					value: user.role,
					title: [roles.find((item) => item.value === user.role).title][0],
				}),
				console.log(user.role));
			console.log(selected, "sel");
		}
		// console.log(user.role);
	}, [user]);

	useEffect(() => {
		console.log(selected, "selected");
	}, [selected]);

	useEffect(() => {
		console.log(newImage, "newImage");
	}, [newImage]);

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

	const handleStatus = (item) => {
		setSelected(item);
		edit_role(item.value);
	};

	return (
		<section className="flex items-start gap-[100px] xl:gap-[56px] md:flex-col md:items-stretch">
			{user ? (
				<>
					<div>
						<div>
							<div
								onClick={() => setMenu(!menu)}
								className="w-[100px] h-[100px] rounded-xl flex"
								// style={{
								// 	background: `url("/images/user.jpg") no-repeat center / cover`,
								// }}
							>
								<img
									className="cursor-pointer"
									src={`${
										user.photo
											? `http://62.113.113.125/${user.photo}`
											: "/images/default-profile.png"
									}`}
									alt="testttttttt"
								/>
								<div className="relative ml-4">
									{menu && (
										<ul
											className={`border-2 h-full transition-all  bottom-0 top-0 m-auto left-0 w-fit rounded-md cursor-pointer flex flex-col justify-around relative`}
										>
											<li
												onClick={(e) => e.stopPropagation()}
												className=" whitespace-nowrap w-full h-full hover:bg-slate-400 hover:text-white px-2 "
											>
												<label className="h-full w-full flex items-center">
													<MdInsertPhoto
														className="mr-3"
														size={25}
													/>
													Сменить фото
													<input
														onChange={(e) => {
															change_photo(
																e.target.files[0],
															);
															setNewImage(
																e.target.files[0],
															);
															get_user();
														}}
														className="absolute invisible"
														type="file"
														accept="image/*"
													/>
												</label>
											</li>
											<hr />
											<li
												onClick={handleExit}
												className="flex items-center w-full h-full hover:bg-slate-400 hover:text-white px-2"
											>
												<RiLogoutBoxFill
													className="mr-3"
													size={25}
												/>
												Выйти
											</li>
										</ul>
									)}
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
										<Reward type="coin/100" width={32} height={32} />
									)}
									{user.medals.length > 0 && (
										<Reward
											type={`jewelry/${
												user.medals.length >= 12
													? "ruby"
													: MEDALS[user.medals.length - 1]
											}`}
											width={32}
											height={32}
										/>
									)}
								</div>
							</div>
							<div
								onClick={() => setRoleSwitch(!roleSwitch)}
								className="text-white text-xs font-medium leading-[16px]  rounded bg-dark w-28 text-center inline-block relative cursor-pointer"
							>
								<div className="p-2">{selected && selected.title}</div>

								{roleSwitch && user.role === "owner" && (
									<>
										<hr className="mt-2" />
										<div className="w-full">
											{roles.map(
												(item) =>
													item.value !== selected.value && (
														<p
															className="my-2 hover:bg-slate-600 p-1"
															key={item.value}
															onClick={() =>
																handleStatus(item)
															}
														>
															{item.title}
														</p>
													),
											)}
										</div>
									</>
								)}
							</div>
						</div>
						<ul className="mt-8 flex flex-col gap-3">
							<UserInfoRow
								label="Дата рождения"
								text={(test && test.date_of_birth) || "--"}
							/>
							<UserInfoRow label="Логин" text={user.user} />
							<UserInfoRow
								label="Пароль"
								text={
									changingPassword.state
										? changingPassword.newPassword
										: changingPassword.currentPassword.replace(
												/./g,
												"*",
										  )
								}
								handleChange={
									!changingPassword.state &&
									(() => {
										setChangingPassword((prevState) => ({
											...prevState,
											state: true,
										}));
									})
								}
								inputValue={changingPassword.newPassword}
								onChange={(e) =>
									setChangingPassword((prevState) => ({
										...prevState,
										newPassword: e.target.value,
									}))
								}
								handleSave={
									changingPassword.state &&
									(() => {
										if (changingPassword.newPassword.length >= 5) {
											change_password(
												changingPassword.currentPassword,
												changingPassword.newPassword,
											).then((res) => {
												if (res?.status === 200) {
													setAuthData({
														...authData,
														password: window.btoa(
															changingPassword.newPassword,
														),
													});
													setChangingPassword((prevState) => ({
														...prevState,
														state: false,
														currentPassword:
															prevState.newPassword,
													}));
													toast.success(
														"Пароль успешно изменён",
													);
												} else {
													toast.error(
														"Новый пароль слишком короткий",
													);
												}
											});
										} else {
											toast.error("Новый пароль слишком короткий");
										}
									})
								}
							/>
							<UserInfoRow
								label="Telegram"
								text={user.telegram_username || "—"}
								// handleDelete={user.telegram_username}
							/>
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
							maxValue={user.medals.length > 12 ? user.medals.length : 12}
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
