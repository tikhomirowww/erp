import { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

export default function DonutDiagram({
	label,
	activeColor,
	percent,
	additionalClasses,
}) {
	const [options, setOptions] = useState({
		data: [
			{ percent: Number(percent) },
			{
				percent: 100 - Number(percent),
			},
		],
		series: [
			{
				type: "pie",
				angleKey: "percent",
				fills: [activeColor, "#EAEBED"],
				strokeOpacity: 0,
				highlightStyle: {
					item: {
						fillOpacity: 0,
					},
				},
				tooltip: {
					enabled: false,
				},
				outerRadiusOffset: 20,
				innerRadiusOffset: 8,
			},
		],
	});

	return (
		<div
			className={`p-5 flex flex-col items-center gap-6 border border-secondaryGray rounded-[20px] ${
				additionalClasses || ""
			}`}>
			<h6 className="text-dark text-sm font-bold text-center">{label}</h6>
			<div className="flex flex-col gap-3 items-center">
				<div className="w-[62px] h-[62px]">
					<AgChartsReact options={options} />
				</div>
				<span className="text-sm font-bold text-dark">{percent}%</span>
			</div>
		</div>
	);
}
