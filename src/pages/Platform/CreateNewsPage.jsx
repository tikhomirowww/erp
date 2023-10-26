import Button from "../../components/Button";
import Input from "./../../components/Input";

export default function CreateNewsPage() {
	return (
		<form className="max-w-[730px]">
			<h3 className="text-dark text-2xl font-bold leading-[28px]">
				Создать новость
			</h3>
			<div className="my-11 flex flex-col gap-9">
				<Input label="Заголовок" />
				<Input label="Текст" isMultiline />
				<div className="flex gap-10">
					<Input label={"Изображение"} isUploadImage />
					<Input label={"Документ"} isUploadDocument />
				</div>
				<Input label={"Дата и время публикации"} isDatepicker />
			</div>
			<div className="flex items-center gap-6">
				<Button text={"Отмена"} />
				<Button text={"Опубликовать"} isFilling />
			</div>
		</form>
	);
}
