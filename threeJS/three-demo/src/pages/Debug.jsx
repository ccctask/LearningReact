import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls, button, Leva } from "leva";
import { Perf } from "r3f-perf";
function Debug() {
	const { position, color } = useControls("basic", {
		position: {
			value: { x: -2, y: 0 },
			step: 0.1,
		},
		color: "rgb(255,0,0)",
		interval: {
			min: 1,
			max: 10,
			value: [4, 5],
		},
		click: button(() => {}),
		choice: { options: ["A", "B"] },
	});
	return (
		<>
			<Leva></Leva>
			<Canvas>
				<Perf position="bottom-right" />
				<OrbitControls></OrbitControls>
				<directionalLight intensity={1.5} />
				<ambientLight intensity={0.4} />
				<mesh position={[position.x, position.y, 0]} scale={2}>
					<boxGeometry></boxGeometry>
					<meshStandardMaterial color={color} />
				</mesh>
				<mesh position={[-1, 0, 0]}>
					<sphereGeometry></sphereGeometry>
					<meshStandardMaterial color="yellowgreen"></meshStandardMaterial>
				</mesh>
			</Canvas>
		</>
	);
}

export default Debug;
