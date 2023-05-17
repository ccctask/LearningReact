import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./backdrop";
import CameraRig from "./CameraRig";
const CanvasModule = () => {
	return (
		<Canvas className="h-full w-full max-w-full border-2 transition-all ease-in">
			<ambientLight intensity={0.5}>
				<Environment preset="city" />
				<CameraRig>
					<Center>
						<Shirt></Shirt>
					</Center>
				</CameraRig>
			</ambientLight>
		</Canvas>
	);
};

export default CanvasModule;
