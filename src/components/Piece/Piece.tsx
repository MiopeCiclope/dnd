import React from "react";
import { Vector3 } from "three";

interface PiecePropType {
    x: number
    y: number
    color: string
}

const Piece = (props: PiecePropType) => {
    const { x, y, color } = props

    return (<mesh
        onClick={(ev) => {
            console.table("piece")
            ev.stopPropagation();
        }}
        scale={[.4, .05, .4]}
        position={new Vector3(x, 0.05, y)}>
        <meshStandardMaterial roughness={0.3} metalness={0.1} color={color} />
        <cylinderGeometry />
    </mesh>)
};

export default Piece;
