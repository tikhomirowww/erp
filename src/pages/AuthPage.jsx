import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Input from "./../components/Input";
import Captcha from "../components/Captcha";

import useLocalStorage from "../hooks/useLocalStorage";

import { ContextApp } from "./../Context";

import { login } from "../utils/api";

export default function AuthPage() {
	const { auth, setAuth } = useContext(ContextApp);

	const navigate = useNavigate();

	const [tokens, setTokens] = useLocalStorage({}, "tokens");
	const [authData, setAuthData] = useLocalStorage({}, "auth_data");

	const [captchaControls, setCaptchaControls] = useState({
		value: null,
		refresh: true,
	});

	const validate = values => {
		const errors = {};

		if (!(values.email.length > 0)) {
			errors.email = "Обязательно к заполнению";
		}

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = "Некорректный формат электронной почты";
		}

		if (!(values.code.length > 0)) {
			errors.code = "Обязательно к заполнению";
		}

		if (!(values.captcha.length > 0)) {
			errors.captcha = "Обязательно к заполнению";
		}

		if (values.captcha !== captchaControls.value) {
			errors.captcha = "Неверная каптча";
			setCaptchaControls(prev => ({ ...prev, refresh: true }));
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			code: "",
			captcha: "",
		},
		validate,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: values => {
			// values - данные, которые прошли валидацию и каптчу
			login(values.email, values.code).then(res => {
				if (res.status === 200) {
					setTokens({
						access_token: res.data.access,
						refresh_token: res.data.refresh,
					});
					setAuthData({
						login: window.btoa(values.email),
						password: window.btoa(values.code),
					});
					setAuth("yes");
					setTimeout(() => navigate("/platform/home"), 1000);
				} else if (res.response.status === 401 || res.response.data.status === 401) {
					toast.error("Неверный логин или пароль");
					formik.resetForm();
					setCaptchaControls(prev => ({ refresh: true }));
				} else {
					toast.error("Неизвестная ошибка");
				}
			});
		},
	});

	if (auth === "yes") {
		navigate("/platform/home");
	} else if (auth === "no") {
		return (
			<>
				<Toaster
					position="bottom-right"
					toastOptions={{
						style: {
							fontSize: "14px",
							color: "#292A2F",
						},
					}}
				/>
				<section className="w-screen min-h-screen bg-[#F3F5FB] relative">
					<img
						className="absolute block max-h-full max-w-full"
						src={"/images/decor-1.png"}
						alt="Декор"
					/>
					<div className="flex-middle min-h-screen relative z-10 ">
						<form
							onSubmit={e => {
								e.preventDefault();
								if (
									formik.values.email &&
									formik.values.code &&
									formik.values.captcha
								) {
									formik.handleSubmit();
								}
							}}
							className="p-5 rounded-3xl shadow-darken bg-white max-w-[320px] w-full">
							<h1 className="font-bold leading-[125%] text-center">
								Авторизация
							</h1>
							<div className="my-8 flex flex-col gap-5">
								<Input
									errorBorderAndText={
										formik.errors.email &&
										"border-negative text-negative"
									}
									name={"email"}
									placeholder="Электронная почта"
									onChange={formik.handleChange}
									value={formik.values.email}
									onBlur={formik.handleBlur}
								/>
								<Input
									errorBorderAndText={
										formik.errors.code &&
										"border-negative text-negative"
									}
									name={"code"}
									placeholder="Пароль"
									onChange={formik.handleChange}
									value={formik.values.code}
									onBlur={formik.handleBlur}
								/>
								<Captcha
									captchaControls={captchaControls}
									setCaptchaControls={setCaptchaControls}
								/>
								<Input
									errorBorderAndText={
										formik.errors.captcha &&
										"border-negative text-negative"
									}
									name={"captcha"}
									placeholder="Captcha"
									onChange={formik.handleChange}
									value={formik.values.captcha}
									onBlur={formik.handleBlur}
								/>
							</div>
							<button
								type="submit"
								className={`cursor-default text-center px-4 py-2.5 leading-[125%] font-semibold text-light rounded-2xl w-full ${
									formik.values.email &&
									formik.values.code &&
									formik.values.captcha
										? "bg-blue cursor-pointer"
										: "bg-[#A2A9C3]"
								}`}>
								Войти
							</button>
						</form>
					</div>
				</section>
			</>
		);
	}
}
