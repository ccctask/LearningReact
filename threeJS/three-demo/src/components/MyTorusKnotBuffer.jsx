// 使用 extend 引入原生的 Three 并标签语义化 以OrbitControls 为例
// useFrame 实现每帧渲染  state 包含所有的Three对象： camera obj gl 等 ； delta 是时间
// 使用 useRef 获取 Dom引用 拿到对象。

import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";
extend({ OrbitControls });

const MyTorusKnotBuffer = () => {
	const torusKnotRef = useRef();
	const groupRef = useRef();
	// useFrame 的 state 虽然可以获得需要的 camera 但是我们不想每帧都去获取
	// gl: 包含所有的 domElement  也就是本例子中使用的 canvas，
	// const three = useThree();

	const { camera, gl } = useThree();

	// state: 包含所有要渲染的DOM
	useFrame((state, delta) => {
		// 每帧运行？
		torusKnotRef.current.rotation.x += delta;
		// groupRef.current.rotation.y += delta;

		// camera 旋转
		// const angle = state.clock.elapsedTime;
		// state.camera.position.x = Math.sin(angle) * 3;
		// state.camera.position.z = Math.cos(angle) * 3;
		// state.camera.lookAt(0, 0, 0);
	});
	return (
		<>
			{/* 要小写 */}
			<orbitControls args={[camera, gl.domElement]} />
			<directionalLight castShadow intensity={1.5} />
			<ambientLight intensity={0.4} />
			<group ref={groupRef}>
				<mesh castShadow scale={0.2} position-x={2} ref={torusKnotRef}>
					<torusKnotGeometry />
					{/* <meshBasicMaterial args={[{ color: "red", wireframe: true }]} /> */}
					<meshStandardMaterial color={"blue"} />
				</mesh>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshNormalMaterial color={"red"} wireframe />
				</mesh>
			</group>

			<mesh
				receiveShadow
				scale={20}
				position-y={-1}
				rotation-x={-Math.PI * 0.5}
			>
				<planeGeometry />
				<meshBasicMaterial color={"greenyellow"} />
			</mesh>
			<CustomObject />
		</>
	);
};

export default MyTorusKnotBuffer;
