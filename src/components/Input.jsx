import clsx from "clsx";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Input({
    errorBorderAndText,
	isMultiline,
	isUploadImage,
	isUploadDocument,
	isDatepicker,
	label,
	additionalClasses,
	...args
}) {
	const [startDate, setStartDate] = useState(null);

	return (
		<div>
			{label && (
				<label className="text-secondaryDark font-bold leading-[125%] mb-2 block">
					{label}
				</label>
			)}
			{!isMultiline &&
				!isUploadImage &&
				!isUploadDocument &&
				!isDatepicker && (
					<input
						className={clsx(
							`px-3 py-[15px] bg-white border rounded-2xl font-semibold text-sm leading-4  w-full placeholder:text-gray focus:border-blue focus:shadow-focusInput`, errorBorderAndText || "text-dark border-secondaryGray ",
						)}
						{...args}
					/>
				)}
			{isMultiline && (
				<textarea
					className={clsx(
						`px-3 py-[15px] bg-white border border-secondaryGray rounded-2xl font-semibold text-sm leading-4 text-dark w-full placeholder:text-gray h-[220px] focus:border-blue focus:shadow-focusInput`,
						additionalClasses,
					)}
					{...args}
				/>
			)}
			{isUploadImage && (
				<div className="flex-middle gap-1 w-[160px] h-[130px] rounded-sm bg-[#F9FAFC] cursor-pointer transition-opacity hover:opacity-80">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="17"
						height="16"
						viewBox="0 0 17 16"
						fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.16659 6C9.16659 4.89333 10.0599 4 11.1666 4C12.2666 4 13.1666 4.89333 13.1666 6C13.1666 7.1 12.2666 8 11.1666 8C10.0599 8 9.16659 7.1 9.16659 6ZM11.1666 5.33333C10.7933 5.33333 10.4999 5.62667 10.4999 6C10.4999 6.36667 10.7933 6.66667 11.1666 6.66667C11.5333 6.66667 11.8333 6.36667 11.8333 6C11.8333 5.62667 11.5333 5.33333 11.1666 5.33333Z"
							fill="#3560FA"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M1.83325 4C1.83325 2.89333 2.72659 2 3.83325 2H13.1666C14.2666 2 15.1666 2.89333 15.1666 4V12C15.1666 13.1 14.2666 14 13.1666 14H3.83325C2.72659 14 1.83325 13.1 1.83325 12V4ZM13.8333 10.3867L13.2466 9.8C12.4599 9.01333 11.1933 9.01333 10.4133 9.8L10.2933 9.91333C10.0266 10.1733 9.60659 10.1733 9.34659 9.91333L7.89325 8.46C7.10659 7.67333 5.83992 7.67333 5.05992 8.46L3.99992 9.51333C3.73325 9.77333 3.73325 10.1933 3.99992 10.4533C4.25992 10.7133 4.67992 10.7133 4.93992 10.4533L5.99325 9.39333C6.25325 9.12667 6.67325 9.12667 6.93325 9.39333L8.37992 10.84C9.15992 11.62 10.4266 11.62 11.2066 10.84L11.3199 10.72C11.5799 10.4533 11.9999 10.4533 12.2599 10.72L13.7399 12.2C13.6399 12.4467 13.3999 12.6267 13.1133 12.6267H3.77992C3.40659 12.6267 3.11325 12.3267 3.11325 11.96V3.96C3.11325 3.58667 3.40659 3.29333 3.77992 3.29333H13.1133C13.4799 3.29333 13.7799 3.58667 13.7799 3.96V10.3467L13.8333 10.3867Z"
							fill="#3560FA"
						/>
					</svg>
					<span className="text-blue text-sm font-medium leading-[16px]">
						Добавить
					</span>
				</div>
			)}
			{isUploadDocument && (
				<div className="flex gap-1 px-1 py-0.5 cursor-pointer transition-opacity hover:opacity-80">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M2.66675 5.33337C2.66675 3.11852 4.45189 1.33337 6.66675 1.33337C8.87407 1.33337 10.6667 3.11765 10.6667 5.33337V9.00004C10.6667 10.2882 9.6216 11.3334 8.33341 11.3334C7.03682 11.3334 6.00008 10.2865 6.00008 9.00004V6.00004C6.00008 5.63185 6.29856 5.33337 6.66675 5.33337C7.03494 5.33337 7.33341 5.63185 7.33341 6.00004V9.00004C7.33341 9.55359 7.77668 10 8.33341 10C8.88523 10 9.33341 9.55185 9.33341 9.00004V5.33337C9.33341 3.85577 8.13943 2.66671 6.66675 2.66671C5.18827 2.66671 4.00008 3.8549 4.00008 5.33337V9.00004C4.00008 11.3924 5.93552 13.3334 8.33341 13.3334C10.7252 13.3334 12.6667 11.3918 12.6667 9.00004V3.33337C12.6667 2.96518 12.9652 2.66671 13.3334 2.66671C13.7016 2.66671 14.0001 2.96518 14.0001 3.33337V9.00004C14.0001 12.1282 11.4616 14.6667 8.33341 14.6667C5.19798 14.6667 2.66675 12.1276 2.66675 9.00004V5.33337Z"
							fill="#3560FA"
						/>
					</svg>
					<span className="text-blue text-sm font-medium leading-[16px]">
						Загрузить
					</span>
				</div>
			)}
			{isDatepicker && (
				<div className="relative max-w-[310px] w-full">
					<svg
						className="absolute top-1/2 -translate-y-1/2 left-3 z-10"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H17V2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2ZM20 9V5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H4V9H20ZM4 11H20V19H4V11Z"
							fill="#292A2F"
						/>
					</svg>
					<ReactDatePicker
						placeholderText="Выбрать"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						className="pr-3 pl-10 h-[48px] bg-white border border-secondaryGray rounded-2xl font-semibold text-sm leading-4 text-dark w-full placeholder:text-gray"
					/>
				</div>
			)}
		</div>
	);
}
