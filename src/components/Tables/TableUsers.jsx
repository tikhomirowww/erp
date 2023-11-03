import clsx from "clsx";
import Reward from "../Reward";
import ModalWindow from "./../ModalWindow";
import Button from "./../Button";
import Dropdown from "./../Dropdown";
import LineProgressBarBlock from "./../ProgressBarBlocks/LineProgressBarBlock";
import TableCategories from "./../Tables/TableCategories"

import { useState } from "react";

export default function TableUsers() {
	const [userPopup, setUserPopup] = useState(false);

	const head = [
		"№",
		"Ф.И.О.",
		"Награды",
		"Средний показатель эффективности",
		"Почта",
		"Роль",
		"Активность",
		"Действия",
	];

	const data = [
		[
			"1",
			"Ахмадуллин Айрат",
			["coin/100", "emerald"],
			"94%",
			"workwork_1@mail.ru",
			"Модератор",
			"Активен",
			"",
		],
		[
			"2",
			"Ахмадуллин Айрат",
			["coin/10", "emerald"],
			"98%",
			"workwork_1@mail.ru",
			"Модератор",
			"Активен",
			"",
		],
		[
			"3 ",
			"Ахмадуллин Айрат",
			["coin/50", "emerald"],
			"54,7 %",
			"workwork_1@mail.ru",
			"Сотрудник",
			"Не активен",
			"",
		],
	];

	return (
		<>
			<div className="best-scrollbar xxl:overflow-x-auto xxl:max-w-full xxl:w-full">
				<div className="flex items-center md:min-w-[740px]">
					{head.map((item, index) => (
						<div
							className={clsx(
								"text-secondaryDark text-xs font-bold leading-[16px] h-11 flex items-center px-2",
								{
									"w-[55px] justify-center": index === 0,
									"w-[109px]": index === 7,
									"basis-1/6": index !== 0 && index !== 7,
								},
							)}>
							{item}
						</div>
					))}
				</div>
				<div className="md:min-w-[740px]">
					{data.map((row, indexRow) => (
						<div className="flex border-b border-secondaryGray">
							{row.map((item, indexItem) => (
								<div
									className={clsx(
										"h-[68px] px-2 flex items-center",
										{
											"w-[55px] justify-center":
												indexItem === 0,
											"w-[109px]": indexItem === 7,
											"basis-1/6":
												indexItem !== 0 &&
												indexItem !== 7,
											"text-blue text-sm":
												indexItem === 1,
											"text-xs text-dark font-medium": [
												0, 4, 5, 6,
											].includes(indexItem),
										},
									)}>
									{indexItem === 1 && (
										<span
											className="cursor-pointer hover:opacity-80 transition-opacity"
											onClick={() => setUserPopup(true)}>
											{item}
										</span>
									)}
									{indexItem === 2 && (
										<div className="flex gap-1.5">
											<Reward
												type={item[0]}
												width={32}
												height={32}
											/>
											<Reward
												type={"jewelry/agate"}
												width={32}
												height={32}
											/>
										</div>
									)}
									{indexItem === 3 && (
										<span
											className={clsx(
												"font-bold text-xl",
												{
													"text-yellow":
														Number(
															item
																.replace(
																	",",
																	".",
																)
																.split("%")[0],
														) < 95 &&
														Number(
															item
																.replace(
																	",",
																	".",
																)
																.split("%")[0],
														) > 80,
													"text-positive":
														Number(
															item
																.replace(
																	",",
																	".",
																)
																.split("%")[0],
														) >= 95,
													"text-negative":
														Number(
															item
																.replace(
																	",",
																	".",
																)
																.split("%")[0],
														) <= 80,
												},
											)}>
											{item}
										</span>
									)}
									{indexItem === 7 && (
										<div className="flex gap-1">
											<div className="w-6 h-6 flex-middle rounded-lg bg-dark/5 cursor-pointer hover:opacity-80">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M10.8619 2.19526C11.1223 1.93491 11.5444 1.93491 11.8047 2.19526L13.8047 4.19526C14.0651 4.45561 14.0651 4.87772 13.8047 5.13807L6.27618 12.6666H13.3333C13.7015 12.6666 14 12.9651 14 13.3333C14 13.7015 13.7015 14 13.3333 14H4.67407L4.66667 14H2.66667C2.29848 14 2 13.7015 2 13.3333V11.3333C2 11.1565 2.07024 10.987 2.19526 10.8619L8.85973 4.19746L8.86192 4.19526L8.86412 4.19307L10.8619 2.19526ZM9.33333 5.60948L3.33333 11.6095V12.6667H4.39053L10.3905 6.66667L9.33333 5.60948ZM11.3333 5.72386L10.2761 4.66667L11.3333 3.60948L12.3905 4.66667L11.3333 5.72386Z"
														fill="#6F8EFF"
													/>
												</svg>
											</div>
											<div className="w-6 h-6 flex-middle rounded-lg bg-dark/5 cursor-pointer hover:opacity-80">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none">
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M8.00008 5C7.60611 5 7.216 5.0776 6.85203 5.22836C6.48805 5.37913 6.15733 5.6001 5.87876 5.87868C5.60018 6.15726 5.3792 6.48797 5.22844 6.85195C5.07767 7.21593 5.00008 7.60603 5.00008 8C5.00008 8.39397 5.07767 8.78407 5.22844 9.14805C5.3792 9.51203 5.60018 9.84274 5.87876 10.1213C6.15733 10.3999 6.48805 10.6209 6.85203 10.7716C7.216 10.9224 7.60611 11 8.00008 11C8.39404 11 8.78415 10.9224 9.14813 10.7716C9.5121 10.6209 9.84282 10.3999 10.1214 10.1213C10.4 9.84274 10.621 9.51203 10.7717 9.14805C10.9225 8.78407 11.0001 8.39397 11.0001 8C11.0001 7.60603 10.9225 7.21593 10.7717 6.85195C10.621 6.48797 10.4 6.15726 10.1214 5.87868C9.84282 5.6001 9.5121 5.37913 9.14813 5.22836C8.78415 5.0776 8.39404 5 8.00008 5ZM7.36227 6.4602C7.56448 6.37644 7.78121 6.33333 8.00008 6.33333C8.21895 6.33333 8.43567 6.37644 8.63788 6.4602C8.84009 6.54396 9.02382 6.66672 9.17859 6.82149C9.33335 6.97625 9.45612 7.15999 9.53988 7.36219C9.62363 7.5644 9.66674 7.78113 9.66674 8C9.66674 8.21887 9.62363 8.4356 9.53988 8.63781C9.45612 8.84001 9.33335 9.02375 9.17859 9.17851C9.02382 9.33328 8.84009 9.45604 8.63788 9.5398C8.43567 9.62356 8.21895 9.66667 8.00008 9.66667C7.78121 9.66667 7.56448 9.62356 7.36227 9.5398C7.16006 9.45604 6.97633 9.33328 6.82157 9.17851C6.6668 9.02375 6.54403 8.84001 6.46028 8.63781C6.37652 8.4356 6.33341 8.21887 6.33341 8C6.33341 7.78113 6.37652 7.5644 6.46028 7.36219C6.54403 7.15999 6.6668 6.97625 6.82157 6.82149C6.97633 6.66672 7.16006 6.54396 7.36227 6.4602Z"
														fill="#6F8EFF"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M8.00008 2C4.39431 2 1.37163 4.5052 0.680418 7.86569C0.662172 7.9544 0.662191 8.04589 0.680477 8.1346C1.37166 11.4876 4.39368 14 8.00008 14C11.6005 14 14.6213 11.4871 15.3194 8.13597C15.3381 8.04638 15.3381 7.95391 15.3195 7.86432C14.6213 4.50566 11.5999 2 8.00008 2ZM8.00008 12.6667C5.06899 12.6667 2.63019 10.6603 2.01573 7.99984C2.63005 5.33391 5.06827 3.33333 8.00008 3.33333C10.9242 3.33333 13.3632 5.33282 13.9841 7.99984C13.3631 10.6614 10.9235 12.6667 8.00008 12.6667Z"
														fill="#6F8EFF"
													/>
												</svg>
											</div>
										</div>
									)}
									{indexItem !== 1 &&
										indexItem !== 2 &&
										indexItem !== 3 &&
										indexItem !== 7 &&
										item}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<ModalWindow trigger={userPopup}>
				<div className="p-1">
					<div className="flex justify-between items-center mb-8 ">
						<h1 className="text-dark text-2xl font-bold leading-[28px]">
							Константин Константинопольский
						</h1>
						<svg
							className="cursor-pointer"
							onClick={() => setUserPopup(false)}
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M14.7142 5.28607C15.0396 5.61151 15.0396 6.13914 14.7142 6.46458L11.1786 10.0002L14.7142 13.5357C15.0396 13.8611 15.0396 14.3888 14.7142 14.7142C14.3887 15.0397 13.8611 15.0397 13.5356 14.7142L10.0001 11.1787L6.4646 14.7142C6.13917 15.0396 5.61153 15.0396 5.28609 14.7142C4.96066 14.3887 4.96066 13.8611 5.28609 13.5356L8.82159 10.0002L5.28607 6.46464C4.96063 6.1392 4.96063 5.61156 5.28607 5.28613C5.61151 4.96069 6.13914 4.96069 6.46458 5.28613L10.0001 8.82164L13.5357 5.28607C13.8611 4.96063 14.3887 4.96063 14.7142 5.28607Z"
								fill="#292A2F"
							/>
						</svg>
					</div>
					<h6 className="mb-5 text-secondaryDark text-sm font-bold leading-[16px]">
						Общие результаты деятельности
					</h6>
					<div className="flex flex-wrap gap-x-3 gap-y-5 md:flex-col md:gap-3">
						<LineProgressBarBlock
							percent={25}
							additionalClasses={"basis-[32.4%]"}
							label="Выполнение на недельной итерации"
							isCentered
						/>
						<LineProgressBarBlock
							percent={54.3}
							additionalClasses={"basis-[32.4%]"}
							label="Общий результат"
							opinion={"Сумма результатов всех категорий"}
							isCentered
						/>
						<LineProgressBarBlock
							percent={105}
							additionalClasses={"basis-[32.4%]"}
							label="Результат в сравнении с общекомандным"
							isCentered
							increasePercent={5}
						/>
						<LineProgressBarBlock
							percent={51}
							additionalClasses={"basis-[32.4%]"}
							label="Самый низкий показатель (% выполнения)"
							opinion="Выручка млн. руб."
							isCentered
							isNegative
						/>
						<LineProgressBarBlock
							percent={108.7}
							additionalClasses={"basis-[32.4%]"}
							label="Самый высокий показатель (% выполнения)"
							opinion={"Операционные затраты "}
							isCentered
						/>
						<div className="basis-[32.4%] flex flex-col items-center gap-4 justify-center p-3 rounded-3xl border border-[#EAEBED]">
							<span className="text-dark text-lg font-extrabold leading-[22px]">
								12
							</span>
							<span className="text-secondaryDark text-sm font-semibold leading-[18px]">
								Дней без пропуска
							</span>
						</div>
					</div>
					<Button
						text="Сравнить периоды"
						isFilling
						className="mt-8 mb-6"
					/>
					<Dropdown additionalClasses="mb-5" />
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
							percent={12}
							label="Дней без пропуска"
							additionalClasses="basis-1/6"
                            isDisableProgressBar
						/>
					</div>
                    <TableCategories/>
				</div>
			</ModalWindow>
		</>
	);
}
