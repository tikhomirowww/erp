import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import TableMetrics from "../../../components/Tables/TableMetrics";

export default function MetricsPage() {
	const navigate = useNavigate();

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">
				Метрики
			</h1>
			<Button
				className="mt-5"
				text="Добавить"
				isFilling
				icon="plus"
				onClick={() => navigate("/platform/metric/add")}
			/>
			<Dropdown additionalClasses="my-6" />
			<TableMetrics />
		</section>
	);
}
