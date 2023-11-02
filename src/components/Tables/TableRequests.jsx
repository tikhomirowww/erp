import clsx from "clsx";

export default function TableRequests() {
	return <div className="mt-6 mdd:overflow-x-auto md:pb-3 best-scrollbar mdd:max-w-full">
    <div className="flex justify-between mdd:w-[1000px]">
        {[
            "№",
            "Наименование",
            "Даты",
            "Кол-во категорий метрик",
            "Кол-во метрик",
            "Активность",
        ].map((head, index) => (
            <div
                className={clsx(
                    "text-secondaryDark text-xs font-bold leading-[16px] px-2 py-1 flex items-center",
                    {
                        "w-[55px] justify-center": index === 0,
                    },
                    {
                        "basis-1/5": index !== 0
                    }
                )}>
                {head}
            </div>
        ))}
    </div>
    {[
        {
            id: 1,
            fio: "Июль",
            all_reports: "1.07.2023-31.07.2023",
            weight_metric: "8",
            plain: "4",
            activity: "Активно",
        },
        {
            id: 2,
            fio: "Июнь",
            all_reports: "1.07.2023-31.07.2023",
            weight_metric: "8",
            plain: "4",
            activity: "Активно",
        },
        {
            id: 3,
            fio: "Май",
            all_reports: "1.07.2023-31.07.2023",
            weight_metric: "8",
            plain: "4",
            activity: "Не активно",
        },
    ].map(row => (
        <div className="h-[68px] flex items-center border-b border-secondaryGray mdd:w-[1000px]">
            {Object.keys(row).map((key, index) => (
                <div
                    className={clsx(
                        "font-medium leading-[16px] px-2 py-1 flex items-center",
                        [index === 1 ? "text-blue text-sm" : "text-dark text-xs"],
                        {
                            "w-[55px] justify-center": index === 0,
                        },
                        {
                            "basis-1/5": index !== 0
                        }
                    )}>
                    <span className={clsx({
                        "text-sm rounded-[20px] px-3 py-1 font-semibold": index === 5,
                        "bg-[#659464] text-white": index === 5 && row[key] === "Активно",
                        "text-dark bg-[#CECECE]": index === 5 && row[key] === "Не активно",
                    })}>{row[key]}</span>
                </div>
            ))}
        </div>
    ))}
</div>;
}