import Input from "./../../components/Input";
import Button from "./../../components/Button";

export default function EditNewsPage() {
	return (
		<form className="max-w-[730px]">
			<h3 className="text-dark text-2xl font-bold leading-[28px]">
				Редактировать новость
			</h3>
			<div className="my-11 flex flex-col gap-9">
				<Input label="Заголовок" />
				<Input label="Текст" isMultiline />
				<div>
					<label className="text-secondaryDark font-bold leading-[125%] mb-2 block">
						Изображение
					</label>
					<img
						className="rounded-sm my-2 max-w-[160px]"
						src={"/images/articles/banner-1.jpg"}
						alt="Миниатюра загруженного изображения"
					/>
					<button className="px-1 py-0.5  text-sm font-medium leading-[16px] text-negative rounded hover:text-secondaryNegative hover:bg-[#FFECED] transition-colors">
						Удалить
					</button>
				</div>
			</div>
			<div className="flex sm:flex-wrap items-center gap-6">
                <Button className={"mr-[80px] md:mr-0 sm:order-3"} text={"Удалить новость"} isNegative/>
				<Button text={"Отмена"} />
				<Button text={"Сохранить"} isFilling />
			</div>
		</form>
	);
}
