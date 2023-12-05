export default function UserInfoRow({
	label,
	text,
	handleSave,
	handleChange,
	handleDelete,
	inputValue,
	onChange,
}) {
	return (
		<li className="flex flex-col items-start">
			<span className="text-gray text-sm font-semibold mb-1">{label}</span>
			{typeof handleSave === "function" ? (
				<input type={"text"} value={inputValue} onChange={(e) => onChange(e)} />
			) : (
				<span className="text-dark leading-[125%] font-medium">{text}</span>
			)}
			{(typeof handleChange === "function" ||
				typeof handleDelete === "function" ||
				typeof handleSave === "function") && (
				<button
					onClick={() => {
						if (typeof handleChange === "function") {
							handleChange();
						} else if (typeof handleDelete === "function") {
							handleDelete();
						} else if (typeof handleSave === "function") {
							handleSave();
						}
					}}
					className={`px-1 py-0.5 mt-1 cursor-pointer font-medium text-sm transition-all rounded ${
						typeof handleChange === "function"
							? "text-blue hover:opacity-80"
							: typeof handleSave === "function"
							  ? "text-green-600 hover:opacity-80"
							  : "text-negative hover:text-secondaryNegative hover:bg-[#FFECED]"
					}`}
				>
					{typeof handleChange === "function"
						? "Изменить"
						: typeof handleSave === "function"
						  ? "Сохранить"
						  : "Удалить"}
				</button>
			)}
		</li>
	);
}
