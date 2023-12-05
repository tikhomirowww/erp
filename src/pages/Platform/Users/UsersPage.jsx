import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import TableUsers from "../../../components/Tables/TableUsers";
import { useEffect, useState } from "react";
import { get_all_users } from "../../../utils/api.js";

export default function UsersPage() {
	const navigate = useNavigate();

	const [users, setUsers] = useState([]);

	useEffect(() => {
		get_all_users().then(({ data }) => {
			console.log(data);
			data.map(({ id, user, role, medals }) => {
				setUsers((prev) => [
					...prev,
					[
						id,
						"Ахмадуллин Айрат",
						[...medals],
						"94%",
						user,
						{ owner: "Владелец", user: "Пользователь", admin: "Админ" }[
							role
						] || "Пользователь",
						"Активен",
						"",
					],
				]);
			});
		});
	}, []);

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
				onClick={() => navigate("/platform/user/edit")}
			/>
			<TableUsers data={users} />
		</section>
	);
}
