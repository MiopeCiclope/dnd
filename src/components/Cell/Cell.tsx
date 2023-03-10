import { MeshStandardMaterial, Vector3 } from 'three'
import React, { useState } from 'react'
import { ISquaretModel } from '../../models/square-model'
import { connect } from 'react-redux'
import cellAction from "../../store/cell/cell-actions";
import { ApplicationState, store } from '../../store/store';
import { ISettingsModel } from '../../models/settings-model';

interface CellPropType {
    cell: ISquaretModel
}

interface StateProps {
    settings: ISettingsModel
}

interface DispatchProps {
    updateCell: (cellList: ISquaretModel) => void;
}

type ICellProp = CellPropType & StateProps & DispatchProps;

const Cell = (props: ICellProp) => {
    const { cell, settings, updateCell } = props
    const [color, setColor] = useState(cell.color)
    const material = new MeshStandardMaterial({ roughness: .3, metalness: .1, color: color })

    return (
        <mesh
            onClick={(ev) => {
                cell.isSelected = !cell.isSelected
                setColor(cell.isSelected ? settings.selectCellColor : cell.color)
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

const mapStateToProps = (state: ApplicationState) => ({
    settings: state.settingsReducer.settings
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCell: (cellList: ISquaretModel) => dispatch(cellAction.updateCell(cellList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
