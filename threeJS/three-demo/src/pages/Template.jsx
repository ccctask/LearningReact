import { Canvas } from "@react-three/fiber";
import React, { StrictMode } from "react";
import { OrbitControls } from "@react-three/drei";

function Template() {
	return (
		<StrictMode>
			<Canvas>
				<OrbitControls />
				<directionalLight intensity={1.5} />
				<ambientLight intensity={0.4} />
				<mesh>
					<boxGeometry></boxGeometry>
					<meshStandardMaterial color="hotpink" />
				</mesh>
			</Canvas>
		</StrictMode>
	);
}

export default Template;
