import { Vector3 } from 'three'
import React from 'react'

interface CellPropType {
    position: Vector3
    color: string
    row: number
    column: number
}

const Cell = (props: CellPropType) => {
    return (
        <mesh
            onClick={(ev) => {
                console.table(props)
                ev.stopPropagation();
            }}
            scale={[1, 1, 0.1]}
            position={props.position}
            rotation={[Math.PI / -2, 0, 0]}>
            <meshStandardMaterial roughness={0.3} metalness={0.1} color={props.color} />
            <boxGeometry />
        </mesh>
    )
}

export default Cell