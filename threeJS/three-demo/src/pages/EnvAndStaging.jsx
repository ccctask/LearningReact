import { Canvas } from "@react-three/fiber";
import React from "react";
import { Four, Plan } from "../components";
function EnvAndStaging() {
	return (
		<Canvas shadows>
			<Four></Four>
			<Plan></Plan>
		</Canvas>
	);
}

export default EnvAndStaging;
