import { MeshStandardMaterial, Vector3 } from 'three'
import React, { useState } from 'react'
import { ISquaretModel } from '../../models/square-model'
import { connect } from 'react-redux'
import cellAction from "../../store/cell/cell-actions";

interface CellPropType {
    cell: ISquaretModel
}

interface DispatchProps {
    updateCell: (cellList: ISquaretModel) => void;
}

type ICellProp = CellPropType & DispatchProps;

const Cell = (props: ICellProp) => {
    console.log("changed")
    const { cell, updateCell } = props
    const [color, setColor] = useState(cell.color)
    const material = new MeshStandardMaterial({ roughness: .3, metalness: .1, color: color })

    return (
        <mesh
            onClick={(ev) => {
                cell.isSelected = !cell.isSelected
                setColor(cell.isSelected ? "red" : cell.color)
                updateCell(cell)
                ev.stopPropagation();
            }}
            scale={[1, 1, 0.1]}
            position={cell.position}
            rotation={[Math.PI / -2, 0, 0]}
            material={material}
        >
            <boxGeometry />
        </mesh>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCell: (cellList: ISquaretModel) => dispatch(cellAction.updateCell(cellList))
    };
};

export default connect(null, mapDispatchToProps)(Cell);
