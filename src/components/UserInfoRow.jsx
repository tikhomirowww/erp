export default function UserInfoRow({ label, text, canChange, canDelete }) {
	return (
		<li className="flex flex-col items-start">
			<span className="text-gray text-sm font-semibold mb-1">
				{label}
			</span>
			<span className="text-dark leading-[125%] font-medium">{text}</span>
			{(canChange || canDelete) && (
				<button
					className={`px-1 py-0.5 mt-1 cursor-pointer font-medium text-sm transition-all rounded ${
						canChange ? "text-blue hover:opacity-80" : "text-negative hover:text-secondaryNegative hover:bg-[#FFECED]"
					}`}>
					{canChange ? "Изменить" : "Удалить"}
				</button>
			)}
		</li>
	);
}
