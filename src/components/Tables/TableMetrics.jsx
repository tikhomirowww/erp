import clsx from "clsx";

export default function TableMetrics() {
	return (
		<div className="mt-6 xxl:overflow-x-auto md:pb-3 best-scrollbar xxl:max-w-full">
			<div className="flex justify-between xxl:w-[1100px]">
				{[
					"№",
					"Категория метрики",
					"Метрика",
					"Вес метрики",
					"План",
					"Факт",
					"% выполнения",
					"Активность",
				].map((head, index) => (
					<div
						className={clsx(
							"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
							{
                                "basis-[3%] justify-center": index === 0,
                            },
                            {
                                "basis-[7%]": index === 1,
                            },
                            {
                                "basis-[15%]": index === 2,
                            },
                            {
                                "basis-[15%]": !([0,1,2].includes(index))
                            }
						)}>
						{head}
					</div>
				))}
			</div>
			{[
				{
					id: 1,
					fio: "Фин.",
					all_reports: "Выручка млн. руб.",
					weight_metric: "0,4",
					plain: "0,4",
					fact: "0,4",
					percent_done: "15%",
					activity: "Активно",
				},
				{
					id: 2,
					fio: "Фин.",
					all_reports: "Выручка млн. руб.",
					weight_metric: "0,4",
					plain: "0,4",
					fact: "0,4",
					percent_done: "15%",
					activity: "Активно",
				},
				{
					id: 3,
					fio: "Клиен.",
					all_reports: "Выручка млн. руб.",
					weight_metric: "0,4",
					plain: "0,4",
					fact: "0,4",
					percent_done: "15%",
					activity: "Не активно",
				},
			].map(row => (
				<div className="h-[68px] flex items-center border-b border-secondaryGray xxl:w-[1100px]">
					{Object.keys(row).map((key, index) => (
						<div
							className={clsx(
								"font-medium leading-[16px] px-2 py-1 flex items-center",
								[index === 2 ? "text-blue text-sm" : "text-dark text-xs"],
                                {
                                    "basis-[3%] justify-center": index === 0,
                                },
                                {
                                    "basis-[7%]": index === 1,
                                },
                                {
                                    "basis-[15%]": index === 2,
                                },
                                {
                                    "basis-[15%]": !([0,1,2].includes(index))
                                }
							)}>
							<span className={clsx({
                                "text-sm rounded-[20px] px-3 py-1 font-semibold": index === 7,
                                "bg-[#659464] text-white": index === 7 && row[key] === "Активно",
                                "text-dark bg-[#CECECE]": index === 7 && row[key] === "Не активно",
                            })}>{row[key]}</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
