import { useState } from "react";

export default function Dropdown({ additionalClasses, text='Март (1.03.2023 - 31.03.2023)' }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`inline-block ${additionalClasses || ""}`}
			onClick={() => setIsOpen(!isOpen)}>
			<div className="px-3 py-[11px] rounded-2xl border border-secondaryGray bg-white flex items-center gap-3 justify-between cursor-pointer hover:border-secondaryDark hover:bg-[#F9FAFC]">
				<span className="text-dark font-medium">
					{text}
				</span>
				<svg
					style={{
						transform: `rotate(${isOpen ? "-180deg" : "0"})`,
					}}
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3.57757 6.9107C3.90301 6.58527 4.43065 6.58527 4.75609 6.9107L10.0002 12.1548L15.2442 6.9107C15.5697 6.58527 16.0973 6.58527 16.4228 6.9107C16.7482 7.23614 16.7482 7.76378 16.4228 8.08921L10.5894 13.9225C10.264 14.248 9.73634 14.248 9.41091 13.9225L3.57757 8.08921C3.25214 7.76378 3.25214 7.23614 3.57757 6.9107Z"
						fill="#292A2F"
					/>
				</svg>
			</div>
			{/*  <div>Extra</div> */}
		</div>
	);
}
