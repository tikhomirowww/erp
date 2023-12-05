import clsx from "clsx";

import { useNavigate } from "react-router-dom";

import CircularProgressBarBlock from "../../../components/ProgressBarBlocks/CircularProgressBarBlock";

export default function ReportsPage() {
	const navigate = useNavigate();

	return (
		<section>
			<div className="flex gap-2.5 justify-between md:flex-wrap">
				<CircularProgressBarBlock
					activeColor="#00B808"
					label="Средний результат за периоды"
					percent="95"
					additionalClasses="basis-1/3 md:basis-[100%]"
				/>
				<CircularProgressBarBlock
					activeColor="#E1D033"
					label="Результаты за текущий период"
					percent="75"
					additionalClasses="basis-1/3 md:basis-[100%]"
				/>
				<CircularProgressBarBlock
					activeColor="#F7343D"
					label="Результат на недельной итерации"
					percent="60"
					additionalClasses="basis-1/3 md:basis-[100%]"
				/>
			</div>
			<div className="mt-6 md:max-w-[900px] md:overflow-x-auto md:pb-3 best-scrollbar">
				<div className="flex justify-between md:w-[900px]">
					{[
						"№",
						"ФИО",
						"Всего отчётов",
						"Отчётов сдано",
						"Средний результат за периоды",
						"Результаты за текущий период",
						"В сравнении с общекомандными",
					].map(head => (
						<div
							className={clsx(
								"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
								{
									"w-8 justify-center": head === "№",
								},
								{
									"basis-1/6": head !== "№",
								},
							)}>
							{head}
						</div>
					))}
				</div>
				{[
					{
						id: 1,
						fio: "Сергей",
						all_reports: 16,
						passed_reports: 16,
						average_result_for_period: 16,
						results_for_current_period: 16,
						in_comparison_with_team: 16,
					},
					{
						id: 2,
						fio: "Сергей",
						all_reports: 16,
						passed_reports: 16,
						average_result_for_period: 16,
						results_for_current_period: 16,
						in_comparison_with_team: 16,
					},
					{
						id: 3,
						fio: "Сергей",
						all_reports: 16,
						passed_reports: 16,
						average_result_for_period: 16,
						results_for_current_period: 16,
						in_comparison_with_team: 16,
					},
				].map(row => (
					<div className="h-[68px] flex items-center border-b border-secondaryGray md:w-[900px]">
						{Object.keys(row).map(key => (
							<div
								className={clsx(
									"text-xs font-medium leading-[16px] px-2 py-1 flex items-center",
									[key === "fio" ? "text-blue" : "text-dark"],

									{
										"w-8 justify-center": key === "id",
									},
									{
										"basis-1/6": key !== "id",
									},
								)}>
								<span
									className={clsx({
										"cursor-pointer hover:opacity-80":
											key === "fio",
									})}
									onClick={() => {
										if (key === "fio") {
											navigate(`/report/${row["id"]}`);
										}
									}}>
									{row[key]}
								</span>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
