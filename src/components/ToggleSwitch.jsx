import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToggleSwitch({ label }) {
	const [uid, setUid] = useState(uuidv4())

    return (
		<div className="toggleSwitch flex items-center gap-3">
			<div className="pt-1.5">
				<input
					className="toggleSwitch__input"
					type="checkbox"
					id={uid}
					onClick={e => {
						setIsActive(e?.target?.checked);
					}}
				/>
				<label className="toggleSwitch__label" for={uid}></label>
			</div>
			{label && (
				<span className="text-dark text-sm font-bold">{label}</span>
			)}
		</div>
	);
}
