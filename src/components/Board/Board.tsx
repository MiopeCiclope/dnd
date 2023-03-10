import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Vector3 } from "three";
import Cell from "../Cell/Cell";
import { ISquaretModel } from "../../models/square-model";
import { ApplicationState } from "../../store/store";
import cellAction from "../../store/cell/cell-actions";

interface BoardPropType {
    numRows: number
    numCols: number
}

interface StateProps {
    cellList: ISquaretModel[]
}

interface DispatchProps {
    saveCells: (cellList: ISquaretModel[]) => void;
}

type IBoardProp = BoardPropType & StateProps & DispatchProps;

const Board = (props: IBoardProp) => {
    const { numRows, numCols, cellList, saveCells } = props

    useEffect(() => {
        const numPositions = numRows * numCols;

        const cells = Array.from({ length: numPositions }, (_, i) => {
            const row = Math.floor(i / numCols);
            const column = i % numCols;
            return {
                id: i,
                position: new Vector3(column - (numCols / 2), 0, row - (numRows / 2)),
                color: (column + row) % 2 === 0 ? "white" : "lightgray",
                row: row,
                column: column,
                highlightMoveElement: false,
                isSelected: false
            } as ISquaretModel;
        });
        saveCells(cells)
    }, []);



    return <>{cellList.map((cell, index) => (
        <Cell key={index} cell={cell} />
    ))}</>;
};

const mapStateToProps = (state: ApplicationState) => ({
    cellList: state.cellReducer.list
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        saveCells: (cellList: ISquaretModel[]) => dispatch(cellAction.saveList(cellList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
