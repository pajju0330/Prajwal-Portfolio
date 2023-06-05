import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";

const Laptops = () => {
	const laptop = useGLTF("./laptop/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.5} groundColor='black' />
			<pointLight intensity={1} />
			<primitive object={laptop.scene} />
		</mesh>
	);
};
const LaptopCanvas = () => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [0, -10, 50], fov: 10 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<Loader />} />
			<OrbitControls
				enableZoom={false}
				maxPolarAngle={Math.PI / 3}
				minPolarAngle={Math.PI / 3}
			/>
			<Laptops />
			<Preload all />
		</Canvas>
	);
};

export default LaptopCanvas;
