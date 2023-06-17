import React from "react";

function CustomObject() {
	const verticesCount = 10 * 3;
	// 90个随机数字数组
	const positions = new Float32Array(verticesCount * 3);
	for (let index = 0; index < verticesCount * 3; index++) {
		positions[index] = (Math.random() - 0.5) * 3;
	}
	console.log(positions);

	return (
		<mesh>
			<bufferGeometry></bufferGeometry>
			<meshBasicMaterial color={"cyan"} />
		</mesh>
	);
}

export default CustomObject;
