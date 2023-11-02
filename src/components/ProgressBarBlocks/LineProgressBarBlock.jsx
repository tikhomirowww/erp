export default function LineProgressBarBlock({
	percent,
	label,
	opinion,
	increasePercent,
	decreasePercent,
	isNegative,
	additionalClasses,
}) {
	return (
		<div
			className={`p-2 rounded-2xl border border-secondaryLight ${
				additionalClasses || ""
			}`}>
			<div className="flex justify-between">
				<span className="text-dark text-xl font-extrabold leading-[110%]">
					{percent.toString().replace(/[.]/g, ",")}%
				</span>
				{increasePercent && (
					<div className="flex items-center gap-0.5 py-0.5 px-1 bg-positive text-white rounded-3xl relative top-1 right-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13"
							height="12"
							viewBox="0 0 13 12"
							fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.54293 4.87058L6.40672 2.0068C6.58245 1.83107 6.86738 1.83107 7.04311 2.0068L9.9069 4.87058C10.0826 5.04632 10.0826 5.33124 9.9069 5.50698C9.73116 5.68272 9.44624 5.68272 9.2705 5.50698L7.17492 3.4114V10.125H6.27492V3.4114L4.17933 5.50698C4.0036 5.68272 3.71867 5.68272 3.54293 5.50698C3.3672 5.33124 3.3672 5.04632 3.54293 4.87058Z"
								fill="white"
							/>
						</svg>
						<span className="text-sm leading-[18px] font-semibold">
							{increasePercent}%
						</span>
					</div>
				)}
				{decreasePercent && (
					<div className="flex items-center gap-0.5 py-0.5 px-1 bg-negative text-white rounded-3xl relative top-1 right-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.04293 7.12942L5.90672 9.9932C6.08245 10.1689 6.36738 10.1689 6.54311 9.9932L9.4069 7.12942C9.58263 6.95368 9.58263 6.66876 9.4069 6.49302C9.23116 6.31728 8.94624 6.31728 8.7705 6.49302L6.67492 8.5886V1.875H5.77492V8.5886L3.67933 6.49302C3.5036 6.31728 3.21867 6.31728 3.04293 6.49302C2.8672 6.66876 2.8672 6.95368 3.04293 7.12942Z"
								fill="white"
							/>
						</svg>
						<span className="text-sm leading-[18px] font-semibold">
							{decreasePercent}%
						</span>
					</div>
				)}
			</div>
			<div className="w-full rounded-xl bg-secondaryLight h-1 my-3">
				<div
					className={`rounded-xl h-full ${
						!isNegative ? "bg-gradient-positive" : "bg-gradient-negative"
					}`}
					style={{
						width: `${percent > 100 ? 100 : percent}%`,
					}}
				/>
			</div>
            <div>
                <h6 className="text-secondaryDark text-xs font-bold">{label}</h6>
                <p className="mt-2 text-xs text-gray font-medium">
                    {opinion}
                </p>
            </div>
		</div>
	);
}
