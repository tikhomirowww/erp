import clsx from "clsx";
import { usePeriods } from "../../PeriodsContext";
import { useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";

export default function TableMetrics({ metrics }) {
	const TABLE_HEAD = [
		"№",
		"Категория метрики",
		"Метрика",
		"Вес метрики",
		"План",
		"Факт",
		"% выполнения",
		"Активность",
	];

	const TABLE_ROWS = [
		{
			name: "John Michael",
			job: "Manager",
			date: "23/04/18",
		},
		{
			name: "Alexa Liras",
			job: "Developer",
			date: "23/04/18",
		},
		{
			name: "Laurent Perrier",
			job: "Executive",
			date: "19/09/17",
		},
		{
			name: "Michael Levi",
			job: "Developer",
			date: "24/12/08",
		},
		{
			name: "Richard Gran",
			job: "Manager",
			date: "04/10/21",
		},
	];

	return (
		<Card className="h-full w-full overflow-scroll">
			<table className="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						{TABLE_HEAD.map((head) => (
							<th
								key={head}
								className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
							>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal leading-none opacity-70"
								>
									{head}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{metrics.goals_data &&
						metrics.goals_data.map((item, index) => {
							const isLast = index === TABLE_ROWS.length - 1;
							const classes = isLast
								? "p-4"
								: "p-4 border-b border-blue-gray-50";

							return (
								<tr key={item.name}>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.id}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.category}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.metrics_name}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.weights}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.number_range_finally}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.total_revenue}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal"
										>
											{item.completion_percentage}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											as="a"
											href="#"
											variant="small"
											color="blue-gray"
											className="font-medium"
										>
											{item.is_active ? "Активно" : "Не активно"}
										</Typography>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</Card>
	);
}
