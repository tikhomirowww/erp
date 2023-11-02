import { useState } from "react";

export default function Checkbox({ label }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="flex items-center gap-3">
			<div
				className="w-6 h-6 flex-middle cursor-pointer bg-white border-blue border rounded"
				onClick={() => setIsActive(!isActive)}>
				{isActive && <div className="w-4 h-4 rounded-sm bg-blue" />}
			</div>
			<span className="text-dark text-sm font-bold leading-[18px]">
				{label}
			</span>
		</div>
	);
}