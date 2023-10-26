import ProgressBar from "../../components/ProgressBar";
import Reward from "../../components/Reward";
import UserInfoRow from "../../components/UserInfoRow";

export default function ProfilePage() {
	return (
		<section className="flex items-start gap-[100px] xl:gap-[56px] md:flex-col md:items-stretch">
			<div>
				<div>
					<div
						className="w-[100px] h-[100px] rounded-xl"
						style={{
							background: `url("/images/user.jpg") no-repeat center / cover`,
						}}
					/>
					<div className="flex gap-6 items-center mt-3 mb-2 xl:flex-col xl:items-start xl:gap-2">
						<h6 className="text-dark font-bold leading-[150%] max-w-[180px]">
							Константин Константинопольский
						</h6>
						<div className="flex items-center gap-1.5">
							<Reward type="coin/50" width={32} height={32} />
							<Reward
								type="jewelry/agate"
								width={32}
								height={32}
							/>
						</div>
					</div>
					<div className="text-white text-xs font-medium leading-[16px] px-2 py-1 rounded bg-dark inline-block">
						Модератор
					</div>
				</div>
				<ul className="mt-8 flex flex-col gap-3">
					<UserInfoRow label="Дата рождения" text="21.01.1990" />
					<UserInfoRow label="Логин" text="constantinopol" />
					<UserInfoRow label="Пароль" text="********" canChange />
					<UserInfoRow
						label="Telegram"
						text="constantinopol"
						canDelete
					/>
					<UserInfoRow
						label="Логин"
						text="constantinopol_1312@mail.ru"
					/>
				</ul>
			</div>
			<div className="flex flex-col gap-16 md:grow">
				<ProgressBar
					label={"Дней без пропусков"}
					currentValue={60}
					maxValue={100}
                    extraItems={"coins"}
				/>
				<ProgressBar
					label={"Выполненные планы за период"}
					currentValue={7}
					maxValue={10}
                    extraItems={"jewelries"}
				/>
			</div>
		</section>
	);
}
