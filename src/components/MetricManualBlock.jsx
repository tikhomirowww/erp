import { useEffect, useState } from "react";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";
import { usePeriods } from "../PeriodsContext";

export default function MetricManualBlock({ toggleSwitchLabel, metric }) {
	const [data, setData] = useState({
		weight: metric.number_range_finally,
		range: metric.weight_of_perspective,
	});

	const handleChange = (e) => {
		const { value, name } = e.target;
		setData({ ...data, [name]: value });
	};

	const { edit_metric } = usePeriods();

	const [isActive, setIsActive] = useState(metric.is_active);

	useEffect(() => {
		edit_metric(metric.id, "is_active", isActive);
		console.log(isActive, "isActive");
		// get_metrics();
	}, [isActive]);

	return (
		<div className="max-w-[283px] w-full rounded-[20px] border border-secondaryGray bg-white p-5">
			<ToggleSwitch
				isActive={isActive}
				setIsActive={setIsActive}
				label={toggleSwitchLabel}
			/>
			<ul className="flex flex-col gap-3 mt-5">
				{[
					{ title: "Вес метрики", value: "weight", id: 1 },
					{ title: "План на период", value: "range", id: 2 },
				].map((item) => (
					<li key={item.id} className="flex items-center justify-between">
						<span className="text-dark text-sm leading-[18px]">
							{item.title}
						</span>
						<div className="max-w-[88px]">
							<Input
								name={item.value}
								onChange={handleChange}
								value={data[item.value]}
								isCenterText
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
