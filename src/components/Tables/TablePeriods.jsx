import clsx from "clsx";

export default function TablePeriods() {
	return (
		<div className="mt-6 md:max-w-[900px] md:overflow-x-auto md:pb-3 best-scrollbar">
			<div className="flex justify-between md:w-[900px]">
				{[
					"№",
					"Наименование",
					"Даты",
					"Кол-во категорий метрик",
					"Кол-во метрик"
				].map(head => (
					<div
						className={clsx(
							"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
							{
								"w-14 justify-center": head === "№",
							},
							{
								"basis-1/4": head !== "№",
							},
						)}>
						{head}
					</div>
				))}
			</div>
			{[
				{
					id: 1,
					fio: "Июль",
					all_reports: "1.07.2023-31.07.2023",
					passed_reports: 16,
					average_result_for_period: 16,
				},
				{
					id: 2,
					fio: "Июнь",
					all_reports: "1.07.2023-31.07.2023",
					passed_reports: 16,
					average_result_for_period: 16,
				},
				{
					id: 3,
					fio: "Май",
					all_reports: "1.07.2023-31.07.2023",
					passed_reports: 16,
					average_result_for_period: 16,
				},
			].map(row => (
				<div className="h-[68px] flex items-center border-b border-secondaryGray md:w-[900px]">
					{Object.keys(row).map(key => (
						<div
							className={clsx(
								"text-xs font-medium leading-[16px] px-2 py-1 flex items-center",
								[key === "fio" ? "text-blue" : "text-dark"],

								{
									"w-14 justify-center": key === "id",
								},
								{
									"basis-1/4": key !== "id",
								},
							)}>
							<span
								className={clsx({
									"cursor-pointer hover:opacity-80":
										key === "fio",
								})}
								onClick={() => {
									if (key === "fio") {
										navigate(`${row["id"]}`);
									}
								}}>
								{row[key]}
							</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
}