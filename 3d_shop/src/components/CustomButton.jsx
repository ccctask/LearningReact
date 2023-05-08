import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
function CustomButton({ type, title, customStyle, onClick }) {
	const snapshot = useSnapshot(state);
	// 从状态库 获取 按钮的状态定义
	function generateStyle(type) {
		if (type === "filled") {
			return {
				backgroundColor: snapshot.color,
				color: "#fff",
			};
		}
	}
	return (
		<button
			className={`flex-1 rounded-md px-2 py-1.5 ${customStyle}`}
			style={generateStyle(type)}
			onClick={onClick}
		>
			{title}
		</button>
	);
}

export default CustomButton;
