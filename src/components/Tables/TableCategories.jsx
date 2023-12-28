import clsx from "clsx";
import { useEffect, useState } from "react";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import LineProgressBarBlock from "../../components/ProgressBarBlocks/LineProgressBarBlock";
import { get_results } from "../../utils/api";

export default function TableCategories() {
	const [popup, setPopup] = useState(false);

	const [data, setData] = useState([]);

	useEffect(() => {
		get_results().then(({ data }) => {
			setData(data);
		});
	}, []);

	useEffect(() => {
		console.log(data, "datadfgvhbjklj;v");
	}, [data]);

	const head = [
		"Категория",
		"№",
		"Страт цели",
		"Роль",
		"Факт",
		"План",
		"% выполнения",
		"Все метрики",
		"% выполнения перспективы",
		"Вес перспективы",
		"Результат",
		"Ответственный",
	];

	// const data = [
	// 	[
	// 		"Фин",
	// 		"1",
	// 		"Увеличить выручку",
	// 		"Выручка млн. руб.",
	// 		"5 433 965",
	// 		"5 000 000",
	// 		"94%",
	// 		"0,5",
	// 		"0,5",
	// 		"0,5",
	// 		"94%",
	// 		"Ахмадуллин Айрат",
	// 	],
	// 	[
	// 		"",
	// 		"2",
	// 		"Не превышать бюджет на опер. зат",
	// 		"Операционные атраты (OPEX)",
	// 		"5 433 965",
	// 		"5 000 000",
	// 		"95%",
	// 		"0,5",
	// 		"0,5",
	// 		"0,5",
	// 		"95%",
	// 		"Ахмадуллин Айрат",
	// 	],
	// 	[
	// 		"Клие",
	// 		"3",
	// 		"Не превышать бюджет на опер. зат",
	// 		"Операционные атраты (OPEX)",
	// 		"5 433 965",
	// 		"5 000 000",
	// 		"54.7%",
	// 		"0,5",
	// 		"0,5",
	// 		"0,5",
	// 		"54.7%",
	// 		"Ахмадуллин Айрат",
	// 	],
	// 	[
	// 		"Проц",
	// 		"4",
	// 		"Не превышать бюджет на опер. зат",
	// 		"Операционные атраты (OPEX)",
	// 		"5 433 965",
	// 		"5 000 000",
	// 		"84%",
	// 		"0,5",
	// 		"0,5",
	// 		"0,5",
	// 		"84%",
	// 		"Ахмадуллин Айрат",
	// 	],
	// 	[
	// 		"Ком",
	// 		"5",
	// 		"Не превышать бюджет на опер. зат",
	// 		"Операционные атраты (OPEX)",
	// 		"5 433 965",
	// 		"5 000 000",
	// 		"99%",
	// 		"0,5",
	// 		"0,5",
	// 		"0,5",
	// 		"99%",
	// 		"Ахмадуллин Айрат",
	// 	],
	// ];

	return (
		<>
			<div className="best-scrollbar xxl:overflow-x-auto xxl:max-w-full xxl:w-full">
				<div className="flex items-center xxl:w-[1200px]">
					{head.map((item, index) => (
						<div
							className={clsx(
								"text-secondaryDark text-xs font-bold leading-[16px] h-11 flex items-center px-2",
								{
									"w-[78px] border-r border-secondaryGray": index === 0,
									"w-[32px] justify-center": index === 1,
									"basis-[9%]": [
										2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
									].includes(index),
								},
							)}
						>
							{item}
						</div>
					))}
				</div>
				<div className="w-full xxl:w-[1200px]">
					{data.data &&
						data.data.map((row, indexRow) => (
							<div className="flex">
								{/* {row.map((item, indexItem) => (
									<div
										className={clsx(
											"h-[68px] px-2 flex items-center",
											{
												"w-[78px] border-r border-secondaryGray":
													indexItem === 0,
												"w-[32px] justify-center":
													indexItem === 1,
												"basis-[9%]": [
													2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
												].includes(indexItem),
												"border-secondaryGray border-b":
													indexRow === data.length - 1 ||
													data[indexRow + 1][0] !== "" ||
													indexItem !== 0,
												"text-blue": indexItem === 11,
												"text-dark":
													indexItem !== 11 &&
													indexItem !== 6 &&
													indexItem !== 10,
												"text-xl font-bold":
													indexItem === 6 || indexItem === 10,
												"text-xs font-medium leading-[16px]": [
													0, 1, 2, 3, 4, 5, 7, 8, 9, 11,
												].includes(indexItem),
												"text-yellow":
													(indexItem === 6 ||
														indexItem === 10) &&
													Number(item.slice(0, -1)) < 95 &&
													Number(item.slice(0, -1)) > 80,
												"text-negative":
													(indexItem === 6 ||
														indexItem === 10) &&
													Number(item.slice(0, -1)) <= 80,
												"text-positive":
													(indexItem === 6 ||
														indexItem === 10) &&
													Number(item.slice(0, -1)) >= 95,
											},
										)}
									>
										{indexItem !== 11 &&
											(indexItem === 6 || indexItem === 10
												? item.replace(".", ",")
												: item)}
										{indexItem === 11 && (
											<span
												className="hover:opacity-80 transition-opacity cursor-pointer"
												onClick={() => setPopup(true)}
											>
												{item}
											</span>
										)}
									</div>
								))} */}
							</div>
						))}
				</div>
			</div>
			<ModalWindow trigger={popup}>
				<div className="flex items-center justify-between">
					<Button text="Сравнить периоды" isFilling />
					<div
						className="flex
                            justify-end items-center"
					>
						<div
							className="hover:opacity-90 cursor-pointer transition-opacity px-1.5 py-0.5 flex items-center gap-1"
							onClick={() => setPopup(false)}
						>
							<span className="font-medium leading-[125%] text-blue">
								Закрыть
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.7142 5.28607C15.0396 5.61151 15.0396 6.13914 14.7142 6.46458L11.1786 10.0002L14.7142 13.5357C15.0396 13.8611 15.0396 14.3888 14.7142 14.7142C14.3887 15.0397 13.8611 15.0397 13.5356 14.7142L10.0001 11.1787L6.4646 14.7142C6.13917 15.0396 5.61153 15.0396 5.28609 14.7142C4.96066 14.3887 4.96066 13.8611 5.28609 13.5356L8.82159 10.0002L5.28607 6.46464C4.96063 6.1392 4.96063 5.61156 5.28607 5.28613C5.61151 4.96069 6.13914 4.96069 6.46458 5.28613L10.0001 8.82164L13.5357 5.28607C13.8611 4.96063 14.3887 4.96063 14.7142 5.28607Z"
									fill="#3560FA"
								/>
							</svg>
						</div>
					</div>
				</div>
				<Dropdown additionalClasses="mt-6 mb-5" />
				<div className="flex gap-1 mb-5 xl:grid xl:gap-2">
					<LineProgressBarBlock
						percent={25}
						label="Выполнение на недельной итерации"
						additionalClasses="basis-1/6"
					/>
					<LineProgressBarBlock
						percent={54.3}
						label="Общий результат"
						opinion="Сумма результатов всех категорий"
						additionalClasses="basis-1/6"
					/>
					<LineProgressBarBlock
						percent={105}
						label="Результат в сравнении с общекомандным"
						decreasePercent={8}
						additionalClasses="basis-1/6"
					/>
					<LineProgressBarBlock
						percent={51}
						label="Выручка млн. руб."
						opinion="Самый низкий показатель (% выполнения)"
						increasePercent={5}
						isNegative
						additionalClasses="basis-1/6"
					/>
					<LineProgressBarBlock
						percent={108.7}
						label="Операционные затраты"
						opinion="Самый высокий показатель (% выполнения)"
						additionalClasses="basis-1/6"
					/>
					<LineProgressBarBlock
						percent={90}
						label="Результат за текущий период"
						additionalClasses="basis-1/6"
					/>
				</div>
				<TableCategories />
			</ModalWindow>
		</>
	);
}
