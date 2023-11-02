import CircularProgressBarBlock from "./../../components/ProgressBarBlocks/CircularProgressBarBlock";
import LineProgressBarBlock from "./../../components/ProgressBarBlocks/LineProgressBarBlock";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import TableCategories from "../../components/Tables/TableCategories";
import { useState } from "react";

export default function HomePage() {
    const [isAdmin, setIsAdmin] = useState(false)

    if (isAdmin) {
        return (
            <section>
                <div>
                    <Button text="Сравнить периоды" isFilling className="mt-5" />
                    <Dropdown additionalClasses="mt-6 mb-4" />
                    <div className="flex gap-x-2.5 gap-y-5 flex-wrap mb-5">
                    <CircularProgressBarBlock
                        label="Общий процент выполнения"
                        activeColor="#00B808"
                        percent={95}
                        additionalClasses="max-w-[250px] w-full sm:max-w-none"
                    />
                    <CircularProgressBarBlock
                        label="Общий результат"
                        activeColor="#E1D033"
                        percent={75}
                        additionalClasses="max-w-[250px] w-full sm:max-w-none"
                    />
                </div>
                    <TableCategories />
                </div>
                <div className="w-8 h-8 bg-dark fixed bottom-4 right-4 rounded-full flex-middle cursor-pointer" onClick={() => setIsAdmin(!isAdmin)}>
                    <div className={`w-5 h-5 rounded-full ${isAdmin ? 'bg-green-500' : 'bg-red-500'}`}/>
                </div>
            </section>
        );
    } else {
        return (
            <section>
                <h3 className="text-secondaryDark text-sm font-bold pb-5">
                    Общие результаты деятельности
                </h3>
                <div className="flex gap-x-2.5 gap-y-5 flex-wrap md:grid md:gap-2">
                    <CircularProgressBarBlock
                        label="Выполнение на недельной итерации"
                        activeColor="#00B808"
                        percent={95}
                        additionalClasses="basis-[32%]"
                    />
                    <CircularProgressBarBlock
                        label="Результат за текущий период"
                        activeColor="#F7343D"
                        percent={60}
                        additionalClasses="basis-[32%]"
                    />
                    <CircularProgressBarBlock
                        label="Общий результат"
                        activeColor="#E1D033"
                        percent={75}
                        additionalClasses="basis-[32%]"
                    />
                    <CircularProgressBarBlock
                        label="Самый низкий показатель (% выполнения)"
                        activeColor="#E1D033"
                        percent={95}
                        additionalClasses="basis-[32%]"
                    />
                    <CircularProgressBarBlock
                        label="Самый высокий показатель (% выполнения)"
                        activeColor="#00B808"
                        percent={75}
                        additionalClasses="basis-[32%]"
                    />
                    <CircularProgressBarBlock
                        label="Результат в сравнении с общекомандным"
                        activeColor="#F7343D"
                        percent={60}
                        additionalClasses="basis-[32%]"
                    />
                </div>
                <div>
                    <Button text="Сравнить периоды" isFilling className="mt-5" />
                    <Dropdown additionalClasses="mt-6 mb-4" />
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
                            percent={90}
                            label="Результат за текущий период"
                            additionalClasses="basis-1/6"
                        />
                    </div>
                    <TableCategories />
                </div>
                <div className="w-8 h-8 bg-dark fixed bottom-4 right-4 rounded-full flex-middle cursor-pointer" onClick={() => setIsAdmin(!isAdmin)}>
                    <div className={`w-5 h-5 rounded-full ${isAdmin ? 'bg-green-500' : 'bg-red-500'}`}/>
                </div>
            </section>
        );
    }
}
