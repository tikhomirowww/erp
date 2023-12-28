import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ToggleSwitch from "../../../components/ToggleSwitch";
import clsx from "clsx";
import MetricManualBlock from "../../../components/MetricManualBlock";
import ReactDatePicker from "react-datepicker";
import { usePeriods } from "../../../PeriodsContext";
import { add_metrics } from "../../../utils/api";

export default function AddPeriodPage() {
	const [currentTab, setCurrentTab] = useState("category_metrics");

	const [startDate, setStartDate] = useState("");

	const [endDate, setEndDate] = useState("");

	const { all_metrics, get_all_metrics } = usePeriods();

	const [data, setData] = useState({
		startDate,
		endDate,
		title: "",
		id: [
			all_metrics &&
				all_metrics
					.filter((item) => item.is_active === true)
					.map((item) => item.id),
		],
	});

	const handleAddPeriod = () => {
		add_metrics(data);
		console.log(data, "gotovoooooooo");
	};

	useEffect(() => {
		get_all_metrics();
	}, []);

	useEffect(() => {
		console.log(all_metrics, "alll");
		setData({
			...data,
			id: all_metrics
				.filter((item) => item.is_active === true)
				.map((item) => item.id),
		});
	}, [all_metrics]);

	useEffect(() => {
		console.log(data, "postttt");
	}, [data]);

	useEffect(() => {
		if (startDate && endDate) {
			setData({
				...data,
				startDate: startDate.toISOString().split("T")[0],
				endDate: endDate.toISOString().split("T")[0],
			});
		}
	}, [startDate, endDate]);

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">
				Добавить период
			</h1>
			<div className="max-w-[375px] p-5 rounded-[20px] border border-secondaryGray bg-white mt-5 mb-10">
				<Input
					onChange={(e) => setData({ ...data, title: e.target.value })}
					value={data.title}
					miniLabel="Наименование периода"
				/>
				<div className="my-5">
					<label className="text-gray font-semibold leading-[18px] mb-2 block text-sm">
						Выбор дат (с и по)
					</label>
					<div className="flex gap-2 items-center ">
						<label className="border-2 rounded-lg">
							<ReactDatePicker
								dateFormat="dd/MM/yyyy"
								placeholderText="день/месяц/год"
								className="p-3 rounded-lg text-center w-40"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</label>
						<label className="border-2 rounded-lg">
							<ReactDatePicker
								dateFormat="dd/MM/yyyy"
								placeholderText="день/месяц/год"
								className="p-3 rounded-lg text-center w-40"
								selected={endDate}
								onChange={(date) => setEndDate(date)}
							/>
						</label>
						{/* <Input isCenterText />
						<Input isCenterText /> */}
					</div>
				</div>
				<ToggleSwitch label={"Активно"} uid="add-period" />
			</div>
			<div className="p-5 rounded-[20px] border border-secondaryGray bg-white ">
				<ul className="mb-6 flex items-center justify-between border border-gray rounded-lg md:flex-col">
					{[
						{
							title: "Категория метрик",
							tab: "category_metrics",
						},
						{
							title: "Метрики",
							tab: "metrics",
						},
						{
							title: "Сотрудники",
							tab: "staff",
						},
					].map(({ title, tab }) => (
						<li
							className={clsx(
								"h-9 flex-middle basis-1/3 text-sm font-medium leading-[16px] cursor-pointer rounded-lg md:w-full md:h-auto md:py-3.5",
								[
									currentTab === tab
										? "text-blue outline-1 outline outline-blue"
										: "text-dark",
								],
							)}
							onClick={() => setCurrentTab(tab)}
						>
							{title}
						</li>
					))}
				</ul>
				{currentTab === "category_metrics" && (
					<div>
						<div>
							<h6 className="text-dark font-bold leading-[125%]">
								Категории метрик
							</h6>
							<p className="mt-1 text-sm text-secondaryDark">
								вес перспективы не более «1»
							</p>
						</div>
						<ul className="my-6 max-w-[266px]">
							{["Финансовая", "Клиентская", "Процентная", "Командная"].map(
								(item) => (
									<li
										className={clsx(
											"flex items-center justify-between py-2",
											{
												"border-b border-secondaryGray":
													item !== "Командная",
											},
										)}
									>
										<span className="text-sm text-dark font-bold leading-[18px]">
											{item}
										</span>
										<div className="max-w-[88px]">
											<Input isCenterText />
										</div>
									</li>
								),
							)}
						</ul>
						<Button text="Сохранить" isFilling />
					</div>
				)}
				{currentTab === "metrics" && (
					<>
						<div>
							<h6 className="text-dark font-bold leading-[125%]">
								Финансовые
							</h6>
							<p className="mt-1 text-sm text-secondaryDark">
								не более «1» для веса метрик в данной группе
							</p>
						</div>
						<div className="flex flex-col gap-10 mb-6">
							<div>
								<div className="gap-4 flex mt-4 md:flex-col">
									{all_metrics
										.sort((a, b) => a.id - b.id)
										.map((item) => (
											<MetricManualBlock
												setStatus={setData}
												key={item.id}
												metric={item}
												toggleSwitchLabel={item.name}
											/>
										))}
								</div>
							</div>
						</div>
						{/* <div className="flex flex-col gap-10 mb-6">
							<div>
								<div>
									<h6 className="text-dark font-bold leading-[125%]">
										Финансовые
									</h6>
									<p className="mt-1 text-sm text-secondaryDark">
										не более «1» для веса метрик в данной группе
									</p>
								</div>
								<div className="gap-4 flex mt-4 md:flex-col">
									<MetricManualBlock
										toggleSwitchLabel={"Выручка млн. руб."}
									/>
									<MetricManualBlock
										toggleSwitchLabel={"Операционные затраты (OPEX)"}
									/>
								</div>
							</div>
							<div>
								<div>
									<h6 className="text-dark font-bold leading-[125%]">
										Клиентские
									</h6>
									<p className="mt-1 text-sm text-secondaryDark">
										не более «1» для веса метрик в данной группе
									</p>
								</div>
								<div className="gap-4 flex mt-4 md:flex-col">
									<MetricManualBlock
										toggleSwitchLabel={"Капитальные затраты (СAPEX)"}
									/>
									<MetricManualBlock
										toggleSwitchLabel={
											"Выручка с площадок онлайн-бронирований"
										}
									/>
								</div>
							</div>
						</div> */}
						<Button onClick={handleAddPeriod} text="Сохранить" isFilling />
					</>
				)}
				{currentTab === "staff" && (
					<>
						<div className="flex gap-16 mdd:flex-col mdd:gap-10 mb-6">
							{["Максим", "Пётр", "Сергей"].map((firstName) => (
								<div>
									<p className="mb-3 font-bold leading-[125%] text-secondaryDark">
										{firstName}
									</p>
									<div className="mb-10">
										<div>
											<h6 className="text-dark font-bold leading-[125%]">
												Финансовые
											</h6>
											<p className="mt-1 text-sm text-secondaryDark">
												не более «1» для данной группы
											</p>
										</div>
										<div className="gap-4 flex flex-col mt-4">
											<MetricManualBlock
												toggleSwitchLabel={"Выручка млн. руб."}
											/>
											<MetricManualBlock
												toggleSwitchLabel={
													"Операционные затраты (OPEX)"
												}
											/>
										</div>
									</div>
									<div>
										<div>
											<h6 className="text-dark font-bold leading-[125%]">
												Клиентские
											</h6>
											<p className="mt-1 text-sm text-secondaryDark">
												не более «1» для данной группы
											</p>
										</div>
										<div className="gap-4 flex flex-col mt-4">
											<MetricManualBlock
												toggleSwitchLabel={
													"Капитальные затраты (СAPEX)"
												}
											/>
											<MetricManualBlock
												toggleSwitchLabel={
													"Выручка с площадок онлайн-бронирований"
												}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
						<Button text="Сохранить" isFilling />
					</>
				)}
			</div>
		</section>
	);
}
