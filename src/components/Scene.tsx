import React, { useCallback } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'
import Board from './Board/Board'

const Scene = () => {
    return (
        <main style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ fov: 90, position: [4, 10, -0.5] }}>
                <OrbitControls enablePan={true} minDistance={4} maxDistance={12} />
                <Environment preset={"dawn"} background />
                <Board numRows={15} numCols={15} />
            </Canvas>
        </main>
    )
}

export default Scene
