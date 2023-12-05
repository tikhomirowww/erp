import { useNavigate } from "react-router-dom";
import TablePeriods from "../../../components/Tables/TablePeriods";
import Button from "./../../../components/Button";
import { useEffect, useState } from "react";
import { get_periods } from "../../../utils/api.js";

export default function PeriodsPage() {
	const navigate = useNavigate();

	const [periods, setPeriods] = useState([]);

	useEffect(() => {
		get_periods().then(({ data }) => {
			data.map(
				({
					id,
					title,
					start_date,
					end_date,
					metric_count,
					metric_category_count,
				}) => {
					setPeriods((prevState) => [
						...prevState,
						{
							id,
							fio: title,
							all_reports: `${new Date(
								start_date,
							).toLocaleDateString()}-${new Date(
								end_date,
							).toLocaleDateString()}`,
							passed_reports: metric_category_count,
							average_result_for_period: metric_count,
						},
					]);
				},
			);
		});
	}, []);

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">Периоды</h1>
			<Button
				className="mt-6 mb-5"
				text="Добавить"
				isFilling
				icon="plus"
				onClick={() => navigate("/platform/period/add")}
			/>
			<TablePeriods data={periods} />
		</section>
	);
}
