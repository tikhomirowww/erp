export default function BoxBlock({ children, additionalClasses }) {
	return (
		<div
			className={`p-5 border rounded-[20px] border-secondaryGray bg-white ${
				additionalClasses || ""
			}`}>
			{children}
		</div>
	);
}
