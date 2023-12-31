import clsx from "clsx";
import { useState } from "react";
import ModalWindow from "./ModalWindow.jsx";
import Button from "./Button.jsx";

export default function Article({ title, create_date, text, banner, likes }) {
	const [likesTrigger, setLikesTrigger] = useState(false);

	return (<>
		<article>
			<h3 className="text-dark max-w-[562px] text-2xl font-bold leading-[28px]">
				{title}
			</h3>
			<p className="mt-3 mb-6 text-gray text-sm font-medium leading-[18px]">
				{create_date}
			</p>
			{banner && banner !== "" ? (
				<img
					className="rounded-sm max-w-[400px] w-full h-full max-h-[320px] object-cover"
					src={`${import.meta.env.VITE_HOST}/${banner}`}
					alt="Баннер"
				/>
			) : (
				<div className="rounded-sm max-w-[400px] w-full h-[320px] bg-secondaryDark/20" />
			)}
			<p className="my-6 max-w-[864px] font-medium leading-[125%] text-secondaryDark whitespace-pre-line">
				{text}
			</p>
			<div
				onClick={() => setLikesTrigger(!likesTrigger)}
				className={clsx(
					`px-3 py-2 inline-flex items-center gap-3 rounded-3xl bg-dark/10 transition-colors`,
					{
						"pr-5": likes === 0,
						"cursor-pointer hover:bg-dark/20": likes > 0,
					},
				)}
			>
				<div className="flex items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M22.8381 5.52467C22.1421 5.28262 21.4263 5.20215 20.729 5.28418C20.0141 5.36829 19.3221 5.60879 18.7218 6.0056L18.7 6.01974C18.0702 6.41861 17.5091 6.97435 17.0587 7.65543C16.8118 8.02876 16.3941 8.25331 15.9465 8.25331C15.499 8.25331 15.0813 8.02876 14.8344 7.65543C14.3895 6.98269 13.8167 6.42228 13.1889 6.01703C12.5493 5.61281 11.86 5.36605 11.1641 5.28418C10.4633 5.20173 9.74175 5.28461 9.07505 5.53077L9.05198 5.53905C8.36279 5.77922 7.72586 6.17572 7.1918 6.72026L7.18274 6.7295C6.61174 7.30049 6.15224 7.97888 5.83422 8.75748L5.82817 8.7723C5.4953 9.56009 5.31756 10.403 5.30644 11.2704L5.30621 11.2879C5.28396 12.1447 5.42899 13.0195 5.72062 13.8271C6.00948 14.627 6.43998 15.3419 6.98647 15.9431L6.99238 15.9496L16.0005 25.9906L24.5928 16.4245C24.6418 16.2078 24.7458 16.0003 24.9058 15.824C25.4369 15.2387 25.8676 14.5257 26.1573 13.7387C26.4345 12.9364 26.5705 12.0709 26.5601 11.1993C26.5365 10.3322 26.3553 9.47315 26.0374 8.71659L26.0347 8.7103C25.7125 7.93256 25.2506 7.24553 24.7065 6.71207L24.697 6.70283C24.1588 6.16464 23.517 5.76539 22.8381 5.52467ZM27.3095 17.1049C27.2654 17.3353 27.16 17.557 26.9918 17.7443L16.9918 28.8776C16.7389 29.1593 16.3781 29.3201 15.9995 29.32C15.6209 29.3199 15.2602 29.1588 15.0074 28.877L5.01016 17.7334C4.22483 16.8686 3.61642 15.8514 3.21248 14.7328C2.81176 13.6232 2.61024 12.4212 2.64011 11.2275C2.6567 10.0207 2.90457 8.8425 3.36858 7.74172C3.82295 6.63214 4.48076 5.66131 5.29254 4.84837C6.11459 4.01164 7.09851 3.3978 8.16292 3.02493C9.22627 2.63441 10.3672 2.50536 11.4757 2.63578C12.5915 2.76705 13.6607 3.15937 14.62 3.76689L14.6285 3.77232C15.0963 4.07361 15.5383 4.42831 15.944 4.82865C16.3455 4.43086 16.7864 4.07629 17.2622 3.77382C18.2325 3.13505 19.3231 2.76452 20.4174 2.63578C21.5325 2.50459 22.6556 2.6371 23.7186 3.00757L23.7247 3.00967C24.776 3.38168 25.7579 3.9938 26.578 4.81245C27.3909 5.61078 28.0468 6.60093 28.4971 7.68658C28.9505 8.76666 29.1954 9.95651 29.2261 11.1387L29.2265 11.156C29.2418 12.331 29.0589 13.512 28.6728 14.624L28.6654 14.6452C28.3397 15.5347 27.8808 16.3683 27.3095 17.1049Z"
							fill="#EE80BB"
						/>
						<path
							d="M20.729 5.28418C21.4263 5.20215 22.1421 5.28262 22.8381 5.52467C23.517 5.76539 24.1588 6.16464 24.697 6.70283L24.7065 6.71207C25.2506 7.24553 25.7125 7.93256 26.0347 8.7103L26.0374 8.71659C26.3553 9.47315 26.5365 10.3322 26.5601 11.1993C26.5705 12.0709 26.4345 12.9364 26.1573 13.7387C25.8676 14.5257 25.4369 15.2387 24.9058 15.824C24.7458 16.0003 24.6418 16.2078 24.5928 16.4245L16.0005 25.9906L6.99238 15.9496L6.98647 15.9431C6.43998 15.3419 6.00948 14.627 5.72062 13.8271C5.42899 13.0195 5.28396 12.1447 5.30621 11.2879L5.30644 11.2704C5.31756 10.403 5.4953 9.56009 5.82817 8.7723L5.83422 8.75748C6.15224 7.97888 6.61174 7.30049 7.18274 6.7295L7.1918 6.72026C7.72586 6.17572 8.36279 5.77922 9.05198 5.53905L9.07505 5.53077C9.74175 5.28461 10.4633 5.20173 11.1641 5.28418C11.86 5.36605 12.5493 5.61281 13.1889 6.01703C13.8167 6.42228 14.3895 6.98269 14.8344 7.65543C15.0813 8.02876 15.499 8.25331 15.9465 8.25331C16.3941 8.25331 16.8118 8.02876 17.0587 7.65543C17.5091 6.97435 18.0702 6.41861 18.7 6.01974L18.7218 6.0056C19.3221 5.60879 20.0141 5.36829 20.729 5.28418Z"
							fill="#EE80BB"
						/>
					</svg>
					<span className="text-dark font-semibold leading-[18px]">
						{likes}
					</span>
				</div>
				{/* <div className="flex items-center">
					<div
						className="w-[32px] h-[32px] rounded-full"
						style={{
							background: `url("/images/user.jpg") no-repeat center / cover`,
						}}
					/>
					<div
						className="w-[32px] h-[32px] rounded-full -ml-4"
						style={{
							background: `url("/images/user.jpg") no-repeat center / cover`,
						}}
					/>
					<div
						className="w-[32px] h-[32px] rounded-full -ml-4"
						style={{
							background: `url("/images/user.jpg") no-repeat center / cover`,
						}}
					/>
				</div> */}
			</div>
		</article>
		<ModalWindow trigger={likesTrigger} isWidthContent>
			<div className={'w-[262px] flex flex-col gap-8'}>
				<h2>
					Понравилось
				</h2>
				<div className={'flex flex-col gap-3'}>
					
				</div>
				<button>Закрыть</button>
			</div>
		</ModalWindow>
		</>
	);
}
