import { CircularProgressbar as CP } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressbar({
	label,
	activeColor,
	percent,
	additionalClasses,
}) {
	return (
		<div
			className={`p-5 flex flex-col items-center gap-6 border border-secondaryGray rounded-[20px] ${
				additionalClasses || ""
			}`}>
			<h6 className="text-dark text-sm font-bold text-center">{label}</h6>
			<div className="flex flex-col gap-3 items-center">
				<div className="w-[58px] h-[58px]">
					<CP
                        className="overflow-visible"
						value={percent}
                        maxValue={105}
						styles={{
							path: {
								stroke: activeColor,
                                strokeWidth: 18
							},
							trail: {
								stroke: "#EAEBED",
                                strokeWidth: 18
							},
						}}
					/>
				</div>
				<span className="text-sm font-bold text-dark">{percent}%</span>
			</div>
		</div>
	);
}
