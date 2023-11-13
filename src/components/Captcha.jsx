import { memo, useEffect, useState } from "react";

function Captcha({ captchaControls, setCaptchaControls }) {
	const [generatedValue, setGeneratedValue] = useState("");

	const SYMBOLS = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"e",
		"h",
		"j",
		"k",
		"n",
		"m",
		"v",
		"c",
		"x",
		"z",
		"q",
		"w",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p",
	];

	const SYMBOL_COLORS = [
		"#ff7512",
		"#15c92d",
		"#e9cb21",
		"#2124e9",
		"#21d2e9",
		"#e92132",
		"#7a3e2e",
		"#aa30a0",
	];

	const GENERATED_VALUE_LENGTH = Math.floor(Math.random() * (7 - 5) + 5);

	useEffect(() => {
		if (captchaControls.refresh) {
			let str = "";
			[...new Array(GENERATED_VALUE_LENGTH)].map(
				_ =>
					(str +=
						SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]),
			);
			setCaptchaControls(prev => ({
				...prev,
				value: str,
				refresh: false,
			}));
			setGeneratedValue(str);
		}
	}, [captchaControls]);

	return (
		<div className="w-full h-[60px] bg-gray/10 rounded-lg flex items-center justify-evenly px-2">
			{generatedValue.split("").map(letter => (
				<span
					className="font-lilita text-3xl text-[#aa30a0]"
					style={{
						color: SYMBOL_COLORS[
							Math.floor(Math.random() * SYMBOL_COLORS.length)
						],
						transform: `rotate(${
							["-", ""][Math.floor(Math.random() * 2)]
						}${Math.floor(Math.random() * 35)}deg)`,
					}}>
					{letter}
				</span>
			))}
		</div>
	);
}

export default memo(Captcha);
