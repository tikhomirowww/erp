import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays, format } from "date-fns";
import * as locales from "react-date-range/dist/locale";
import ruLocale from "date-fns/locale/ru";
import { usePeriods } from "../PeriodsContext";
import { get_periods } from "../utils/api";

export default function Dropdown({ additionalClasses, setPeriod }) {
	const [isOpen, setIsOpen] = useState(false);

	const [periods, setPeriods] = useState([]);

	useEffect(() => {
		get_periods().then(({ data }) => setPeriods(data));
	}, []);

	useEffect(() => {
		setSelected(periods[0]);
		console.log(periods, "periods");
	}, [periods]);

	useEffect(() => {
		console.log(isOpen, "isOpen");
	}, [isOpen]);

	const [selected, setSelected] = useState(periods[0]);

	console.log(selected, "selected");

	const formatDate = (date) => {
		console.log(date.split("-").reverse(), "originaldate");
		const [day, month, year] = date.split("-").reverse();
		console.log(`${day}`, "dateeeeee");
		return `${day}/${month}/${year}`;
	};

	const showPeriod = (period) => {
		return `${period.title} (${formatDate(period.start_date)} - ${formatDate(
			period.end_date,
		)})`;
	};

	return (
		<>
			<div
				className={`inline-block ${additionalClasses || ""}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="px-3 py-[11px] rounded-2xl border border-secondaryGray bg-white flex items-center gap-3 justify-between cursor-pointer hover:border-secondaryDark hover:bg-[#F9FAFC] w-[320px]">
					{selected && (
						<span className="text-dark font-medium">
							{showPeriod(selected)}
						</span>
					)}
					<svg
						style={{
							transform: `rotate(${isOpen ? "-180deg" : "0"})`,
						}}
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.57757 6.9107C3.90301 6.58527 4.43065 6.58527 4.75609 6.9107L10.0002 12.1548L15.2442 6.9107C15.5697 6.58527 16.0973 6.58527 16.4228 6.9107C16.7482 7.23614 16.7482 7.76378 16.4228 8.08921L10.5894 13.9225C10.264 14.248 9.73634 14.248 9.41091 13.9225L3.57757 8.08921C3.25214 7.76378 3.25214 7.23614 3.57757 6.9107Z"
							fill="#292A2F"
						/>
					</svg>
				</div>
				{/*  <div>Extra</div> */}
			</div>
			{isOpen && (
				<div
					className="border-secondaryGray border w-fit rounded-2xl max-h-64 overflow-y-scroll"
					// onClick={(e) => e.stopPropagation()}
				>
					{periods.map((item, index) => {
						if (item !== selected) {
							return (
								<div
									key={index}
									onClick={() => {
										setSelected(item);
										setPeriod(item);
									}}
									className="bg-white first:rounded-t-2xl last:rounded-b-2xl odd:hover:bg-slate-500 hover:text-white even:hover:bg-slate-500 flex items-center justify-between cursor-pointer even:text-white even:bg-slate-400 rounded-none"
								>
									<span className={`h-full p-5 w-full font-medium`}>
										{showPeriod(item)}
									</span>
								</div>
							);
						}
					})}
				</div>
			)}
		</>
	);
}
