import React from "react";
import { MyTorusKnotBuffer } from "../components";
import { Canvas } from "@react-three/fiber";
function BasicGeometry() {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			gl={{ antialias: true }}
			style={{ height: "100%" }}
			camera={
				{
					// fov: 45,
					// near: 0.5,
					// far: 200,
				}
			}
		>
			<MyTorusKnotBuffer />
		</Canvas>
	);
}

export default BasicGeometry;
