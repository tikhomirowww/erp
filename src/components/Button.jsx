import clsx from "clsx";

export default function Button({ isNegative, isFilling, text, icon, ...args }) {
	return (
		<div {...args}>
			<button
				className={clsx("transition-all", {
					"font-medium leading-[125%] px-1 py-0.5 rounded":
						!isFilling,
					"text-white font-semibold leading-[125%] px-4 py-2.5 shadow-darkenSky rounded-2xl bg-blue transition-colors hover:bg-secondaryBlue":
						isFilling,
					"text-negative hover:text-secondaryNegative hover:bg-[#FFECED]":
						!isFilling && isNegative,
					"text-secondaryDark hover:bg-secondaryLight":
						!isFilling && !isNegative,
                        'flex items-center gap-1': icon
				})}>
				{text}
                {icon === 'plus' && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none">
					<path
						d="M10.8332 5.00002C10.8332 4.53978 10.4601 4.16669 9.99984 4.16669C9.5396 4.16669 9.1665 4.53978 9.1665 5.00002V9.16669H4.99984C4.5396 9.16669 4.1665 9.53978 4.1665 10C4.1665 10.4603 4.5396 10.8334 4.99984 10.8334H9.1665V15C9.1665 15.4603 9.5396 15.8334 9.99984 15.8334C10.4601 15.8334 10.8332 15.4603 10.8332 15V10.8334H14.9998C15.4601 10.8334 15.8332 10.4603 15.8332 10C15.8332 9.53978 15.4601 9.16669 14.9998 9.16669H10.8332V5.00002Z"
						fill="white"
					/>
				</svg>
			)}
			</button>
		</div>
	);
}
