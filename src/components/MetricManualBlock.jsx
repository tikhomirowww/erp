import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";

export default function MetricManualBlock({ toggleSwitchLabel }) {
	return (
		<div className="max-w-[283px] w-full rounded-[20px] border border-secondaryGray bg-white p-5">
			<ToggleSwitch label={toggleSwitchLabel}/>
			<ul className="flex flex-col gap-3 mt-5">
				{["Вес метрики", "План на период"].map(item => (
					<li className="flex items-center justify-between">
						<span className="text-dark text-sm leading-[18px]">
							{item}
						</span>
						<div className="max-w-[88px]">
							<Input isCenterText />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
