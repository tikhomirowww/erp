import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from "react-useinterval";

export default function NotFound() {
	const navigate = useNavigate();

	const [timer, setTimer] = useState(15);

	useInterval(() => {
		setTimer(timer - 1);
	}, 1000);

	useEffect(() => {
		if (timer <= 0) {
			navigate(-1);
		}
	}, [timer]);

	return (
		<section className="bg-[#F9FAFC] p-5 w-screen min-h-screen flex">
			<div className="bg-white rounded-3xl p-5 w-full flex-middle flex-col">
				<h1 className="font-extrabold text-[64px]">404</h1>
				<p className="text-lg uppercase font-extrabold">
					Страница не найдена
				</p>
				<p className="mt-6 text-sm">
					через {timer} секунд вы будете перенаправлены на предыдущую
					страницу
				</p>
			</div>
		</section>
	);
}
