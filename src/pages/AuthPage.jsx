import { useFormik } from "formik";

import Input from "./../components/Input";

export default function AuthPage() {
	const validate = (values) => {
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
		onSubmit: (values) => {
			console.log(values); // values - данные, которые прошли валидацию
		},
	});

	return (
		<section className="w-screen min-h-screen bg-[#F3F5FB] relative">
			<img
				className="absolute block max-h-full max-w-full"
				src={"/images/decor-1.png"}
				alt="Декор"
			/>
			<div className="flex-middle min-h-screen relative z-10 ">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (
							formik.values.email &&
							formik.values.code &&
							formik.values.captcha
						) {
							formik.handleSubmit();
						}
					}}
					className="p-5 rounded-3xl shadow-darken bg-white max-w-[320px]">
					<h1 className="font-bold leading-[125%] text-center">
						Авторизация
					</h1>
					<div className="my-8 flex flex-col gap-5">
						<Input
							additionalClasses={
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
							additionalClasses={
								formik.errors.code &&
								"border-negative text-negative"
							}
							name={"code"}
							placeholder="Код"
							onChange={formik.handleChange}
							value={formik.values.code}
							onBlur={formik.handleBlur}
						/>
						<img src={"/images/captcha.png"} alt="Каптча"/>
						<Input
							additionalClasses={
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
	);
}
