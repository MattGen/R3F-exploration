import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Cloud, Stars, Sparkles } from '@react-three/drei'
import { useState, useRef, Suspense } from 'react'
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/vanities.glb");
    gltf.scene.traverse(function (node) {
        if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; }
    });
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};

export function SuperCanvas() {
    //const gltf = useLoader(React.GLTFLoader, './models/vanities.glb')

    return (
        <>

            <div id="canvas-container">
                <Canvas camera={{ position: [5, 2, 2] }} style={{ background: "hotpink" }} shadows >


                    {/* <ambientLight intensity={0.1} /> */}
                    <directionalLight color='#EEBBAA' position={[0, 4, 5]} intensity={4} castShadow={true} />
                    {/* <FirstPersonControls /> */}
                    <Stars radius={10} depth={50} count={5000} factor={4} saturation={1} color = {'green'} fade speed={1} />
                    <Sparkles />
                    {/* <Cloud material={THREE.MeshBasicMaterial} position={[-10, 15, 0]}>
                        <Cloud segments={40} bounds={[10, 2, 2]} position={[5, -2, -9]} volume={10} color="orange" />
                        <Cloud seed={1} scale={2} volume={5} position={[0, -3 , -16]} color="hotpink" fade={100} />
                    </Cloud> */}
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <Environment files="/img/sky-colz.hdr" background />
                        <Model />
                    </Suspense>
                </Canvas>
            </div>

        </>
    );
}
export default SuperCanvas;