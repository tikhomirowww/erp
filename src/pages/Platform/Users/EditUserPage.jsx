import BoxBlock from "../../../components/BoxBlock";
import ToggleSwitch from "../../../components/ToggleSwitch";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import SelectsGroup from "../../../components/SelectsGroup";
import { useState } from "react";

export default function EditUserPage() {
    const [isOpen, setIsOpen] = useState(false)

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px] mb-5">
				Профиль
			</h1>
			<div className="flex items-start gap-10 mdd:flex-wrap">
				<BoxBlock additionalClasses="max-w-[322px] w-full sm:max-w-none">
					<div className="flex flex-col gap-4">
						<Input miniLabel="Фамилия" />
						<Input miniLabel="Имя" />
						<Input miniLabel="Отчество" />
						<Input miniLabel="Email" />
					</div>
					<div className="my-5">
						<ToggleSwitch label="Активен" />
					</div>
					<Button isFilling text="Сохранить" />
				</BoxBlock>
				<BoxBlock additionalClasses='sm:w-full'>
					<h6 className="mb-6 text-secondaryDark font-bold leading-[125%]">
						Роль
					</h6>
					<SelectsGroup
						className="flex flex-col gap-5"
						values={["Менеджер", "Администратор", "Владелец"]}
					/>
				</BoxBlock>
				<BoxBlock additionalClasses='sm:w-full'>
					<h6 className="mb-6 text-secondaryDark font-bold leading-[125%]">
						Доступ к разделам
					</h6>
					<div className="flex flex-col gap-5">
						{[
							"Пользователи и роли",
							"Категории метрик",
							"Метрики",
							"Периоды",
							"Статистика",
							"Отчёты",
							"Заполнение данных",
						].map(item => (
							<Checkbox label={item} />
						))}
					</div>
				</BoxBlock>
			</div>
			<div className="flex items-start gap-10 mt-10 mdd:flex-wrap">
				<BoxBlock additionalClasses='sm:w-full'>
					<h6 className="mb-2 text-dark font-bold leading-[125%]">
						График работы сотрудника
					</h6>
					<p className="mb-6 text-secondaryDark leading-[125%] text-sm">
						Выберите рабочие дни сотрудника
					</p>
					<div className="max-h-9 flex gap-3 items-stretch">
						<div className="px-3 py-2 border border-secondaryGray rounded-xl inline-flex gap-[15px] cursor-pointer hover:border-secondaryDark hover:bg-[#F9FAFC]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.0892 4.41083C13.4147 4.73626 13.4147 5.2639 13.0892 5.58934L8.67847 10.0001L13.0892 14.4108C13.4147 14.7363 13.4147 15.2639 13.0892 15.5893C12.7638 15.9148 12.2361 15.9148 11.9107 15.5893L6.9107 10.5893C6.58527 10.2639 6.58527 9.73626 6.9107 9.41083L11.9107 4.41083C12.2361 4.08539 12.7638 4.08539 13.0892 4.41083Z"
									fill="#292A2F"
								/>
							</svg>
							<span className="text-dark font-medium leading-[125%]">
								Сентябрь
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6.9107 4.41083C7.23614 4.08539 7.76378 4.08539 8.08921 4.41083L13.0892 9.41083C13.4147 9.73626 13.4147 10.2639 13.0892 10.5893L8.08921 15.5893C7.76378 15.9148 7.23614 15.9148 6.9107 15.5893C6.58527 15.2639 6.58527 14.7363 6.9107 14.4108L11.3214 10.0001L6.9107 5.58934C6.58527 5.2639 6.58527 4.73626 6.9107 4.41083Z"
									fill="#292A2F"
								/>
							</svg>
						</div>
						<div className="px-3 min-h-full rounded-xl border border-secondaryGray bg-white flex items-center gap-3 justify-between cursor-pointer hover:border-secondaryDark hover:bg-[#F9FAFC]" onClick={() => setIsOpen(!isOpen)}>
							<span className="text-dark font-medium">
								2023
							</span>
							<svg
								style={{
									transform: `rotate(${
										isOpen ? "-180deg" : "0"
									})`,
								}}
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.57757 6.9107C3.90301 6.58527 4.43065 6.58527 4.75609 6.9107L10.0002 12.1548L15.2442 6.9107C15.5697 6.58527 16.0973 6.58527 16.4228 6.9107C16.7482 7.23614 16.7482 7.76378 16.4228 8.08921L10.5894 13.9225C10.264 14.248 9.73634 14.248 9.41091 13.9225L3.57757 8.08921C3.25214 7.76378 3.25214 7.23614 3.57757 6.9107Z"
									fill="#292A2F"
								/>
							</svg>
						</div>
					</div>
				</BoxBlock>
				<BoxBlock additionalClasses='sm:w-full'>
					<h6 className="mb-6 text-secondaryDark font-bold leading-[125%]">
						Выбрать график работы
					</h6>
					<Input placeholder="Дата" isChoiceDate />
					<SelectsGroup
						className="mt-6 flex flex-col gap-5"
						values={[
							"5/2",
							"2/2",
							"3/2",
							"1/3",
							"Настроить свой график",
						]}
					/>
				</BoxBlock>
			</div>
		</section>
	);
}