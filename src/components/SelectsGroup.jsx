import { useEffect, useState } from "react";

export default function SelectsGroup({ values, ...args }) {
	const [selectedValue, setSelectedValue] = useState([]);

	useEffect(() => {
		values.map(_ => setSelectedValue(prev => [...prev, false]));
	}, []);

	return (
		<div {...args}>
			{values.map((value, index) => (
				<div className="flex items-center gap-3">
					<div className="w-6 h-6 border border-blue rounded-full flex-middle cursor-pointer" onClick={() => {
                        let arr = [...selectedValue]
                        arr.map((val, ind) => {
                            if (ind === index) {
                                arr[ind] = true
                            } else {
                                arr[ind] = false
                            }
                        })
                        setSelectedValue(arr)
                    }}>
						{selectedValue.length > 0 && selectedValue[index] && (
							<div className="rounded-full w-4 h-4 bg-blue" />
						)}
					</div>
					<span className="text-black text-sm font-bold">
						{value}
					</span>
				</div>
			))}
		</div>
	);
}
