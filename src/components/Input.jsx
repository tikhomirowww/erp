import clsx from "clsx";

export default function Input({ additionalClasses, ...args }) {
	return (
		<input
			className={clsx(
				`px-3 py-[15px] bg-white border border-[#C8C9CC] rounded-2xl font-semibold text-sm leading-4 text-dark w-full placeholder:text-gray`,
				additionalClasses,
			)}
			{...args}
		/>
	);
}
