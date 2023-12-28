import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import TableMetrics from "../../../components/Tables/TableMetrics";
import { usePeriods } from "../../../PeriodsContext";
import { useEffect, useState } from "react";
import { get_periods } from "../../../utils/api";

export default function MetricsPage() {
	const navigate = useNavigate();

	const { get_metrics, metrics } = usePeriods();

	const [period, setPeriod] = useState(metrics[0]);

	useEffect(() => {
		get_periods().then(({ data }) => setPeriod(data[0]));
		period && get_metrics(period.title, period.start_date, period.end_date);
	}, []);

	useEffect(() => {
		setPeriod(metrics[0]);
	}, []);

	useEffect(() => {
		console.log(period, "period");

		period && get_metrics(period.title, period.start_date, period.end_date);
	}, [period]);

	console.log(metrics, "metr");

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">Метрики</h1>
			<Button
				className="mt-5"
				text="Добавить"
				isFilling
				icon="plus"
				onClick={() => navigate("/platform/metric/add")}
			/>
			<Dropdown setPeriod={setPeriod} additionalClasses="my-6" />
			<TableMetrics metrics={metrics} />
		</section>
	);
}
