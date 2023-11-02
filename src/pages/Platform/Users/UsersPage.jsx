import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import TableUsers from "../../../components/Tables/TableUsers";

export default function UsersPage() {
	const navigate = useNavigate();

	return (
		<section>
			<h1 className="text-dark text-2xl font-bold leading-[28px]">
				Пользователи и роли
			</h1>
			<Button
				className="mt-5 mb-6"
				text="Добавить"
				isFilling
				icon="plus"
				onClick={() => navigate("/platform/user/add")}
			/>
			<TableUsers />
		</section>
	);
}
