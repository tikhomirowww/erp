import BoxBlock from "../../../components/BoxBlock";
import ToggleSwitch from "../../../components/ToggleSwitch";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import SelectsGroup from "../../../components/SelectsGroup";
import { useState } from "react";
import WorkSchedule from "../../../components/WorkSchedule";

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
				<WorkSchedule/>
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