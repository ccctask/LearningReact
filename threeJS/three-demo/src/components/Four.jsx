import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import {
	useHelper,
	OrbitControls,
	BakeShadows,
	softShadows,
	Sampler,
} from "@react-three/drei";
import * as THREE from "three";

// 只运行一次
// softShadows({
// 	size: 25,
// 	samples: 10,
// });

function Four() {
	const directionalLight = useRef();
	useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "black");
	console.log(directionalLight);
	const box = useRef();
	useFrame((state, delta) => {
		box.current.rotation.y += delta;
	});
	return (
		<>
			<BakeShadows></BakeShadows>
			<OrbitControls />
			<directionalLight
				ref={directionalLight}
				position={[-1, 2, 3]}
				intensity={1.5}
				castShadow
			/>
			<ambientLight intensity={0.4} />
			<mesh castShadow ref={box}>
				<boxGeometry></boxGeometry>
				<meshStandardMaterial color="hotpink" />
			</mesh>
			<mesh
				receiveShadow
				scale={10}
				position-y={-0.5}
				rotation-x={-Math.PI * 0.5}
			>
				<planeGeometry />
				<meshStandardMaterial color={"greenyellow"} />
			</mesh>
		</>
	);
}

export default Four;
