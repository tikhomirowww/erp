import clsx from "clsx";

export default function TableCategories() {
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

	const data = [
		[
			"Фин",
			"1",
			"Увеличить выручку",
			"Выручка млн. руб.",
			"5 433 965",
			"5 000 000",
			"94%",
			"0,5",
			"0,5",
			"0,5",
			"94%",
			"Ахмадуллин Айрат",
		],
		[
			"",
			"2",
			"Не превышать бюджет на опер. зат",
			"Операционные атраты (OPEX)",
			"5 433 965",
			"5 000 000",
			"95%",
			"0,5",
			"0,5",
			"0,5",
			"95%",
			"Ахмадуллин Айрат",
		],
		[
			"Клие",
			"3",
			"Не превышать бюджет на опер. зат",
			"Операционные атраты (OPEX)",
			"5 433 965",
			"5 000 000",
			"54.7%",
			"0,5",
			"0,5",
			"0,5",
			"54.7%",
			"Ахмадуллин Айрат",
		],
		[
			"Проц",
			"4",
			"Не превышать бюджет на опер. зат",
			"Операционные атраты (OPEX)",
			"5 433 965",
			"5 000 000",
			"84%",
			"0,5",
			"0,5",
			"0,5",
			"84%",
			"Ахмадуллин Айрат",
		],
		[
			"Ком",
			"5",
			"Не превышать бюджет на опер. зат",
			"Операционные атраты (OPEX)",
			"5 433 965",
			"5 000 000",
			"99%",
			"0,5",
			"0,5",
			"0,5",
			"99%",
			"Ахмадуллин Айрат",
		],
	];

	return (
		<div className="best-scrollbar xxl:overflow-x-auto xxl:max-w-full xxl:w-full">
			<div className="flex items-center xxl:w-[1101px]">
				{head.map((item, index) => (
					<div
						className={clsx(
							"text-secondaryDark text-xs font-bold leading-[16px] h-11 flex items-center px-2",
							{
								"w-20 border-r border-secondaryGray":
									index === 0,
								"w-[35px] justify-center": index === 1,
								"w-[126px]": index === 3,
								"w-[85px]": [4, 5].includes(index),
								"w-[78px]": index === 7,
								"w-[102px]": [2, 6, 8, 9, 10, 11].includes(
									index,
								),
							},
						)}>
						{item}
					</div>
				))}
			</div>
			<div className="xxl:w-[1101px]">
				{data.map((row, indexRow) => (
					<div className="flex">
						{row.map((item, indexItem) => (
							<div
								className={clsx(
									"h-[68px] px-2 flex items-center",
									{
										"w-20 border-r border-secondaryGray":
											indexItem === 0,
										"w-[35px] justify-center":
											indexItem === 1,
										"w-[126px]": indexItem === 3,
										"w-[85px]": [4, 5].includes(indexItem),
										"w-[78px]": indexItem === 7,
										"w-[102px]": [
											2, 6, 8, 9, 10, 11,
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
								)}>
								{indexItem === 6 || indexItem === 10
									? item.replace(".", ",")
									: item}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
