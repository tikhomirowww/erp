import clsx from "clsx";

import CircularProgressbar from "./../../components/CircularProgressbar";
import { useState } from "react";
import ModalWindow from "../../components/ModalWindow";

export default function ReportPage() {
	const [reportModalWindow, setReportModalWindow] = useState(false);

	return (
		<section>
			<div className="flex gap-2.5 justify-between md:flex-wrap">
				<div className="basis-1/4 border border-secondaryGray rounded-[20px] p-5 flex flex-col gap-6 md:basis-[100%] md:items-center">
					<h6 className="text-dark text-sm font-bold leading-[18px]">
						Сергей
					</h6>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-1 md:items-center">
							<span className="text-dark text-xl font-bold leading-[120%]">
								15
							</span>
							<span className="text-secondaryDark text-xs font-medium leading-[16px]">
								Кол-во отчётов:
							</span>
						</div>
						<div className="flex flex-col gap-1 md:items-center">
							<span className="text-dark text-xl font-bold leading-[120%]">
								4
							</span>
							<span className="text-secondaryDark text-xs font-medium leading-[16px]">
								Кол-во метрик:
							</span>
						</div>
					</div>
				</div>
				<CircularProgressbar
					activeColor="#00B808"
					label="Средний результат за периоды"
					percent="95"
					additionalClasses="basis-1/4 md:basis-[100%]"
				/>
				<CircularProgressbar
					activeColor="#E1D033"
					label="Результаты за текущий период"
					percent="75"
					additionalClasses="basis-1/4 md:basis-[100%]"
				/>
				<CircularProgressbar
					activeColor="#F7343D"
					label="Результат на недельной итерации"
					percent="60"
					additionalClasses="basis-1/4 md:basis-[100%]"
				/>
			</div>
			<div className="mt-6 sm:overflow-x-auto sm:pb-3 best-scrollbar">
				<div className="flex justify-between sm:w-[650px]">
					{["№", "Дата отчета", "Период", "Кол-во метрик"].map(
						(head) => (
							<div
								className={clsx(
									"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
									{
										"w-8 justify-center": head === "№",
									},
									{
										"basis-1/3": head !== "№",
									},
								)}>
								{head}
							</div>
						),
					)}
				</div>
				{[
					{
						id: 1,
						date: "13.04.2022",
						period: "Март (1.03.2023 - 31.03.2023)",
						metrics: 16,
					},
					{
						id: 2,
						date: "12.04.2022",
						period: "Март (1.03.2023 - 31.03.2023)",
						metrics: 16,
					},
					{
						id: 3,
						date: "11.04.2022",
						period: "Март (1.03.2023 - 31.03.2023)",
						metrics: 16,
					},
				].map((row) => (
					<div className="h-[68px] flex items-center border-b border-secondaryGray sm:w-[650px]">
						{Object.keys(row).map((key) => (
							<div
								className={clsx(
									"text-xs font-medium leading-[16px] px-2 py-1 flex items-center",
									[
										key === "date"
											? "text-blue"
											: "text-dark",
									],

									{
										"w-8 justify-center": key === "id",
									},
									{
										"basis-1/3": key !== "id",
									},
								)}>
								<span
									className={clsx({
										"cursor-pointer hover:opacity-80":
											key === "date",
									})}
									onClick={() => {
										if (key === "date") {
											setReportModalWindow(true);
										}
									}}>
									{row[key]}
								</span>
							</div>
						))}
					</div>
				))}
			</div>
			<ModalWindow
				trigger={reportModalWindow}
				onClose={() => setReportModalWindow(false)}>
				<div className="mt-6 md:max-w-[900px] md:overflow-x-auto md:pb-3 best-scrollbar">
					<div className="flex justify-between md:w-[800px]">
						{[
							"Дата и время",
							"Метрика",
							"Результат",
							"Комментарий",
							"Действия",
						].map((head) => (
							<div
								className={clsx(
									"text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center basis-1/6 w-full",
									{
										"max-w-[100px]": head === "Действия",
									},
								)}>
								{head}
							</div>
						))}
					</div>
					{[
						{
							date: "13.04.2022",
							metric: 16,
							result: 12,
							comment: "—",
							doings: ["edit"],
						},
						{
							date: "13.04.2022",
							metric: 16,
							result: 12,
							comment: "—",
							doings: ["edit"],
						},
						{
							date: "13.04.2022",
							metric: 16,
							result: 12,
							comment: "—",
							doings: ["edit"],
						},
					].map((row) => (
						<div className="h-[68px] flex items-center border-b justify-between border-secondaryGray md:w-[800px]">
							{Object.keys(row).map((key) => (
								<div
									className={clsx(
										"text-xs font-medium leading-[16px] px-2 py-1 flex items-center text-dark basis-1/4 w-full",
										{
											"max-w-[100px]": key === "doings",
										},
                                      
                                            {
                                                "text-gray text-base bg-[#F9FAFC] h-full w-full": key === "result",
                                            },
                                        
									)}>
									<span>
										{key === "doings" ? (
											<div className="cursor-pointer group bg-[#2F5AF4]/5 w-6 h-6 flex-middle rounded-lg">
												<svg
                                                
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none">
													<path
                                                    className="group-hover:fill-blue transition-all"
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M10.8619 2.19526C11.1223 1.93491 11.5444 1.93491 11.8047 2.19526L13.8047 4.19526C14.0651 4.45561 14.0651 4.87772 13.8047 5.13807L6.27618 12.6666H13.3333C13.7015 12.6666 14 12.9651 14 13.3333C14 13.7015 13.7015 14 13.3333 14H4.67407L4.66667 14H2.66667C2.29848 14 2 13.7015 2 13.3333V11.3333C2 11.1565 2.07024 10.987 2.19526 10.8619L8.85973 4.19746L8.86192 4.19526L8.86412 4.19307L10.8619 2.19526ZM9.33333 5.60948L3.33333 11.6095V12.6667H4.39053L10.3905 6.66667L9.33333 5.60948ZM11.3333 5.72386L10.2761 4.66667L11.3333 3.60948L12.3905 4.66667L11.3333 5.72386Z"
														fill="#6F8EFF"
													/>
												</svg>
											</div>
										) : (
											row[key]
										)}
									</span>
								</div>
							))}
						</div>
					))}
				</div>
			</ModalWindow>
		</section>
	);
}
