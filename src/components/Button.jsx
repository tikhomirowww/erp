import clsx from "clsx";

export default function Button({ isNegative, isFilling, text, ...args }) {
	return (
		<div {...args}>
			<button
				className={clsx("transition-all", {
					"font-medium leading-[125%] px-1 py-0.5 rounded": !isFilling,
					"text-white font-semibold leading-[125%] px-4 py-3 shadow-darkenSky rounded-2xl bg-blue transition-colors hover:bg-secondaryBlue":
						isFilling,
					"text-negative hover:text-secondaryNegative hover:bg-[#FFECED]":
						!isFilling && isNegative,
					"text-secondaryDark hover:bg-secondaryLight":
						!isFilling && !isNegative,
				})}>
				{text}
			</button>
		</div>
	);
}
