import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import Board from './Board/Board'
import { Vector3, PlaneGeometry, ImageUtils, TextureLoader, CircleGeometry } from 'three'
import Piece from './Piece/Piece'

const Scene = () => {
    const defaultSize = 2
    const colorMap = useLoader(TextureLoader, 'test.jpeg')

    return (
        <main style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ fov: 90, position: [0, 8, 0] }}>
                {/* <OrbitControls enablePan={true} minDistance={2} maxDistance={12} enableRotate={false} /> */}
                <OrbitControls enablePan={true} minDistance={2} maxDistance={12} />
                <color attach="background" args={['#171720']} />
                {/* <fog attach="fog" args={['#171720', 60, 90]} /> */}
                <ambientLight intensity={0.2} />
                <pointLight position={[20, 5, 20]} color="white" />
                <Board numRows={defaultSize} numCols={defaultSize} />
                <Piece x={1} y={1} color={"pink"} />
                {/* 
                <mesh
                    onClick={(ev) => {
                        console.table("new cylinderGeometry")
                        ev.stopPropagation();
                    }}
                    scale={[1, .1, 1]}
                    position={new Vector3(3, 1, 3)}
                    geometry={new CylinderGeometry(undefined, undefined, undefined, 100)}>
                    <meshStandardMaterial roughness={0.3} metalness={0.1} color={"green"} />
                </mesh> */}

                <mesh
                    onClick={(ev) => {
                        console.table("new cylinderGeometry")
                        ev.stopPropagation();
                    }}
                    scale={[1, 1, 1]}
                    rotation={[Math.PI / -2, 0, 0]}

                    position={new Vector3(3, 1, 3)}
                    geometry={new CircleGeometry(1, 50)}

                >
                    <meshStandardMaterial map={colorMap} />
                </mesh>
            </Canvas>
        </main>
    )
}

export default Scene
