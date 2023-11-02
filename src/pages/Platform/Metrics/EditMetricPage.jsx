import Checkbox from "../../../components/Checkbox";
import BoxBlock from "./../../../components/BoxBlock";
import Button from "./../../../components/Button";
import Input from "./../../../components/Input";
import ToggleSwitch from "./../../../components/ToggleSwitch";
import ModalWindow from "./../../../components/ModalWindow";
import { useState } from "react";
import TableRequests from "../../../components/Tables/TableRequests";

export default function EditMetricPage() {
	const [requestsPopup, setRequestsPopup] = useState(false);

	return (
		<>
			<section>
				<h1 className="text-dark text-2xl font-bold leading-[28px] mb-4">
					Редактировать цель
				</h1>
				<div
					onClick={() => setRequestsPopup(!requestsPopup)}
					className="bg-[#F9FAFC] rounded px-3 py-2.5 text-dark text-sm leading-[16px] inline-block mb-5 hover:text-secondaryDark hover:bg-[#EAEBED] cursor-pointer transition-all">
					Запросы на редактирование (1)
				</div>
				<div className="max-w-[550px] flex gap-10 justify-between items-start sm:flex-col">
					<BoxBlock additionalClasses="w-full">
						<h6 className="text-secondaryDark font-bold leading-[125%] mb-6">
							Стратегическая цель
						</h6>
						<div className="flex flex-col gap-5">
							<Input miniLabel="Стратегическая цель" />
							<Input miniLabel="Наименование метрики" />
							<ToggleSwitch label="Активно" />
						</div>
					</BoxBlock>
					<BoxBlock additionalClasses="w-full max-w-[190px] sm:max-w-none">
						<h6 className="text-secondaryDark font-bold leading-[125%] mb-6">
							Категория метрик
						</h6>
						<div className="flex flex-col gap-5">
							<Checkbox label="Финансовая" />
							<Checkbox label="Клиентская" />
							<Checkbox label="Процентная" />
							<Checkbox label="Командная" />
						</div>
					</BoxBlock>
				</div>
				<BoxBlock additionalClasses="my-10 max-w-[510px]">
					<h6 className="text-dark font-bold leading-[125%]">
						Вариант ответа
					</h6>
					<ul className="my-6">
						<li className="flex justify-between items-center sm:flex-col sm:items-start sm:gap-4">
							<Checkbox label="Диапазон цифр (целое)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
						<div className="bg-secondaryGray w-full h-[1px] my-4" />
						<li className="flex justify-between items-center sm:flex-col sm:items-start sm:gap-4">
							<Checkbox label="Диапазон цифр (дробное)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
						<div className="bg-secondaryGray w-full h-[1px] my-4" />
						<li className="flex justify-between items-center sm:flex-col sm:items-start sm:gap-4">
							<Checkbox label="Диапазон цифр (процентное)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
						<div className="bg-secondaryGray w-full h-[1px] my-4" />
						<li className="flex justify-between items-center">
							<Checkbox label='Вариант "Да" или "Нет"' />
						</li>
					</ul>
					<ToggleSwitch label="Обратное деление" />
				</BoxBlock>
				<Button text="Сохранить" isFilling />
			</section>
			<ModalWindow trigger={requestsPopup}>
				<div className="flex justify-between items-center">
					<h1 className="text-dark text-2xl font-bold leading-[28px]">
						Запросы на редактирование
					</h1>
					<svg
                    className="cursor-pointer"
						onClick={() => setRequestsPopup(false)}
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
				<BoxBlock additionalClasses="my-6 max-w-[510px]">
					<h6 className="text-dark font-bold leading-[125%]">
						Вариант ответа
					</h6>
					<ul className="mt-6">
						<li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
							<Checkbox label="Диапазон цифр (целое)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
						<div className="bg-secondaryGray w-full h-[1px] my-4" />
						<li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
							<Checkbox label="Диапазон цифр (дробное)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
						<div className="bg-secondaryGray w-full h-[1px] my-4" />
						<li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
							<Checkbox label="Диапазон цифр (процентное)" />
							<div className="flex gap-3">
								<Input isLittle isCenterText />
								<Input isLittle isCenterText />
							</div>
						</li>
					</ul>
				</BoxBlock>
				<div className="flex items-center gap-9 mb-10">
					<Button text="Отклонить" isNegative />
					<Button text="Сохранить" isFilling />
				</div>
                <TableRequests/>
			</ModalWindow>
		</>
	);
}
