import clsx from "clsx";

/**
 * Reward
 * @param {string} type - Reward in the form of a coin or jewelry with a slash subtype (example, "coin/10" or "jewelry/agate")
 * @param {number} width - Width reward
 * @param {number} height - Height reward
 */
export default function Reward({ type, width, height, isInactive }) {
	if (type.split("/")[0] === "coin") {
		return (
			<div
				className={clsx(
					`flex-middle flex-col rounded-full ${
						width === 100 && height === 100
							? "border-[3px]"
							: "border"
					}`,
					{
						"bg-[#F7A52B] border-[#D88F21]":
							type.split("/")[1] === "10",
						"bg-[#D0DCDE] border-[#ACB6B7]":
							type.split("/")[1] === "50",
						"bg-[#F7E22B] border-[#E2CC0D]":
							type.split("/")[1] === "100",
						"opacity-20": isInactive,
					},
				)}
				style={{
					width: `${width}px`,
					height: `${height}px`,
				}}>
				<span
					className={clsx(
						`${
							width === 100 && height === 100
								? "text-[40px]"
								: "text-[13px]"
						} font-bold leading-[105%]`,
						{
							"text-[#5C3700]": type.split("/")[1] === "10",
							"text-[#656565]": type.split("/")[1] === "50",
							"text-[#6F6022]": type.split("/")[1] === "100",
						},
					)}>
					{type.split("/")[1]}
				</span>
				<span
					className={clsx(
						`font-bold ${
							width === 100 && height === 100
								? "text-xs leading-[14px]"
								: "text-[4px] leading-[5px]"
						}`,
						{
							"text-[#5C3700]": type.split("/")[1] === "10",
							"text-[#656565]": type.split("/")[1] === "50",
							"text-[#6F6022]": type.split("/")[1] === "100",
						},
					)}>
					дней
				</span>
			</div>
		);
	}

	if (type.split("/")[0] === "jewelry") {
		return (
			<div
				className={clsx("flex-middle relative", {
					"opacity-20": isInactive,
				})}
				style={{
					width: `${width}px`,
					height: `${height}px`,
				}}>
				{width === 75 && height === 75 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="75"
						height="75"
						viewBox="0 0 75 75"
						fill="none">
						<rect
							x="1"
							y="1"
							width="73"
							height="73"
							rx="23"
							stroke="url(#paint0_linear_1137_9079)"
							stroke-width="2"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1137_9079"
								x1="107.1"
								y1="75"
								x2="4.24097"
								y2="92.0482"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#24E19D" />
								<stop offset="1" stop-color="#2EBFDF" />
							</linearGradient>
						</defs>
					</svg>
				)}
				{width === 32 && height === 32 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none">
						<rect
							x="0.35"
							y="0.35"
							width="31.3"
							height="31.3"
							rx="8.05"
							stroke="url(#paint0_linear_1255_15292)"
							stroke-width="0.7"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1255_15292"
								x1="45.696"
								y1="32"
								x2="1.80948"
								y2="39.2739"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#24E19D" />
								<stop offset="1" stop-color="#2EBFDF" />
							</linearGradient>
						</defs>
					</svg>
				)}
				<img
					className="max-w-[70%] max-h-[70%] absolute"
					src={`./../src/assets/images/jewelries/${
						type.split("/")[1]
					}.png`}
					alt="Драгоценный камень"
				/>
			</div>
		);
	}
}
