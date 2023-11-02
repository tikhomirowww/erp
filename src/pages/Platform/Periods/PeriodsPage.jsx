import { useNavigate } from "react-router-dom";
import TablePeriods from "../../../components/Tables/TablePeriods";
import Button from "./../../../components/Button";

export default function PeriodsPage() {
	const navigate = useNavigate();

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">
				Периоды
			</h1>
			<Button
				className="mt-6 mb-5"
				text="Добавить"
				isFilling
				icon="plus"
				onClick={() => navigate("/platform/period/add")}
			/>
			<TablePeriods />
		</section>
	);
}
