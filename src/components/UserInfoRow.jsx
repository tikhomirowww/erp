import clsx from "clsx";

export default function UserInfoRow({ label, text, canChange, canDelete }) {
	return (
		<li className="flex flex-col items-start">
			<span className="text-gray text-sm font-semibold mb-1">
				{label}
			</span>
			<span className="text-dark leading-[125%] font-medium">{text}</span>
			{(canChange || canDelete) && (
				<button
					className={`px-1 py-0.5 mt-1 cursor-pointer font-medium text-sm transition-opacity hover:opacity-80 ${
						canChange ? "text-blue" : "text-negative"
					}`}>
					{canChange ? "Изменить" : "Удалить"}
				</button>
			)}
		</li>
	);
}
