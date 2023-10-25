import clsx from "clsx";

import Reward from "./Reward";

export default function ProgressBar({
	label,
	currentValue,
	maxValue,
	extraItems
}) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-start gap-4">
				<div className="flex flex-col gap-2 md:grow">
					<p className="text-secondaryDark font-bold leading-[125%]">
						{label}
					</p>
					<div className="w-[350px] rounded-xl bg-[#EAEBED] h-1 md:w-full">
						<div
							className="bg-[linear-gradient(260deg,#14F010_-209.77%,#D0EBCF_97.96%)] rounded-xl h-full"
							style={{
								width: `${(currentValue / maxValue) * 100}%`,
							}}
						/>
					</div>
				</div>
				<div className="gradient-green-blue-text font-extrabold text-lg w-[88px] h-[60px] border-[2px] border-[#24E19D] rounded-[20px] flex-middle md:text-sm md:w-[60px] md:h-[40px] md:rounded-lg">
					{currentValue}
				</div>
			</div>
			<div
				className={clsx({
					"flex gap-5": extraItems === "coins",
                    "grid gap-2 grid-cols-4 max-w-[324px]": extraItems === "jewelries"
				})}>
				{extraItems === "coins" ? (
					<>
						<Reward type="coin/10" width={100} height={100} />
						<Reward type="coin/50" width={100} height={100} />
						<Reward
							type="coin/100"
							width={100}
							height={100}
							isInactive
						/>
					</>
				) : (
					<>
						<Reward type="jewelry/crystal" width={75} height={75} />
						<Reward type="jewelry/diamond" width={75} height={75} />
						<Reward type="jewelry/citrine" width={75} height={75} />
						<Reward type="jewelry/amethyst" width={75} height={75} />
						<Reward type="jewelry/sapphire" width={75} height={75} />
						<Reward type="jewelry/emerald" width={75} height={75} />
						<Reward type="jewelry/agate" width={75} height={75} />
						<Reward
							type="jewelry/amber"
							width={75}
							height={75}
							isInactive
						/>
						<Reward
							type="jewelry/garnet"
							width={75}
							height={75}
							isInactive
						/>
						<Reward
							type="jewelry/spinel"
							width={75}
							height={75}
							isInactive
						/>
						<Reward
							type="jewelry/topaz"
							width={75}
							height={75}
							isInactive
						/>
						<Reward
							type="jewelry/ruby"
							width={75}
							height={75}
							isInactive
						/>
					</>
				)}
			</div>
		</div>
	);
}
