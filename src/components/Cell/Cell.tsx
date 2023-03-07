import { Vector3 } from 'three'
import React from 'react'

interface CellPropType {
    position: Vector3
    color: string
}

const Cell = (props: CellPropType) => {
    return (
        <mesh
            onClick={() => console.log("click")}
            scale={[1, 1, 0.1]}
            position={props.position}
            rotation={[Math.PI / -2, 0, 0]}>
            <meshStandardMaterial roughness={0.1} metalness={0.7} color={props.color} />
            <boxGeometry />
        </mesh>
    )
}

export default Cell