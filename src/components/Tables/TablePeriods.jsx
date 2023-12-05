import clsx from "clsx";

export default function TablePeriods({ data }) {
	return (
		<div className="mt-6 md:max-w-[900px] md:overflow-x-auto md:pb-3 best-scrollbar">
			<div className="flex justify-between md:w-[900px]">
				{[
					"№",
					"Наименование",
					"Даты",
					"Кол-во категорий метрик",
					"Кол-во метрик",
				].map((head) => (
					<div
						className={clsx(
							"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
							{
								"w-14 justify-center": head === "№",
							},
							{
								"basis-1/4": head !== "№",
							},
						)}
					>
						{head}
					</div>
				))}
			</div>
			{data.map((row) => (
				<div
					key={row.id}
					className="h-[68px] flex items-center border-b border-secondaryGray md:w-[900px]"
				>
					{Object.keys(row).map((key) => (
						<div
							key={key}
							className={clsx(
								"text-xs font-medium leading-[16px] px-2 py-1 flex items-center",
								[key === "fio" ? "text-blue" : "text-dark"],

								{
									"w-14 justify-center": key === "id",
								},
								{
									"basis-1/4": key !== "id",
								},
							)}
						>
							<span>{row[key]}</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
}