import Checkbox from "../../../components/Checkbox";
import BoxBlock from "./../../../components/BoxBlock";
import Button from "./../../../components/Button";
import Input from "./../../../components/Input";
import ToggleSwitch from "./../../../components/ToggleSwitch";

export default function AddMetricPage() {
	return (
		<section>
            <h1 className="text-dark text-2xl font-bold leading-[28px] mb-4">
				Добавить цель
			</h1>
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
					<li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
						<Checkbox label="Диапазон цифр (целое)" />
						<div className="flex gap-3">
							<Input
								isLittle
								isCenterText
							/>
							<Input
								isLittle
								isCenterText
							/>
						</div>
					</li>
                    <div className="bg-secondaryGray w-full h-[1px] my-4"/>
                    <li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
						<Checkbox label="Диапазон цифр (дробное)" />
						<div className="flex gap-3">
							<Input
								isLittle
								isCenterText
							/>
							<Input
								isLittle
								isCenterText
							/>
						</div>
					</li>
                    <div className="bg-secondaryGray w-full h-[1px] my-4"/>
                    <li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
						<Checkbox label="Диапазон цифр (процентное)" />
						<div className="flex gap-3">
							<Input
								isLittle
								isCenterText
							/>
							<Input
								isLittle
								isCenterText
							/>
						</div>
					</li>
                    <div className="bg-secondaryGray w-full h-[1px] my-4"/>
                    <li className="flex justify-between items-center md:flex-col md:items-start md:gap-4">
						<Checkbox label='Вариант "Да" или "Нет"' />
					</li>
				</ul>
				<ToggleSwitch label="Обратное деление" />
			</BoxBlock>
			<Button text="Сохранить" isFilling />
		</section>
	);
}
