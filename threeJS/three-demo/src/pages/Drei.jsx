// Html； 耗CPU，不支持换行符
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	TransformControls,
	PivotControls,
	Html,
	Text,
	Float,
	MeshReflectorMaterial,
} from "@react-three/drei";
function Drei() {
	return (
		<Canvas style={{ height: "100%" }}>
			<OrbitControls />
			<directionalLight intensity={1.5} />
			<ambientLight intensity={0.4} />
			<PivotControls anchor={[0, 0, 0]}>
				<mesh scale={0.2} position-x={2}>
					<torusKnotGeometry />
					{/* <meshBasicMaterial args={[{ color: "red", wireframe: true }]} /> */}
					<meshStandardMaterial color={"blue"} />
				</mesh>
			</PivotControls>
			<TransformControls position-x={-2}>
				<mesh position-x={-2}>
					<sphereGeometry />
					<meshNormalMaterial color={"red"} wireframe />
					<Html
						position={[1, 1, 0]}
						center
						wrapperClass="text"
						distanceFactor={6}
					>
						这是一个球
					</Html>
				</mesh>
			</TransformControls>
			{/* 正方形 */}
			<TransformControls>
				<mesh>
					<boxGeometry />
					<meshNormalMaterial color={"cyan"} />
				</mesh>
			</TransformControls>
			<mesh scale={20} position-y={-2} rotation-x={-Math.PI * 0.5}>
				<planeGeometry />
				<MeshReflectorMaterial
					color={"greenyellow"}
					resolution={1000}
					blur={[1000, 1000]}
					mirror={[0.5]}
					mixBlur={0.75}
				/>
			</mesh>
			<Html position-y={2} wrapperClass="text">
				Html Text
			</Html>
			<Float speed={3} floatIntensity={2}>
				<Text
					font="./bangers-v20-latin-regular.woff"
					fontSize={1.3}
					position={[0, 2, 0]}
					color="salmon"
					maxWidth={8}
					textAlign="center"
				>
					I love Some Things
				</Text>
			</Float>
		</Canvas>
	);
}

export default Drei;
