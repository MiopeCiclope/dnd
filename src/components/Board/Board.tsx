import React from "react";
import { Vector3 } from "three";
import Cell from "../Cell/Cell";

interface BoardPropType {
    numRows: number
    numCols: number
}

const Board = (props: BoardPropType) => {
    const { numRows, numCols } = props
    const numPositions = numRows * numCols;
    const cells = Array.from({ length: numPositions }, (_, i) => {
        const row = Math.floor(i / numCols);
        const column = i % numCols;
        return {
            position: new Vector3(column - (numCols / 2), 0, row - (numRows / 2)),
            row,
            column
        };
    });

    const meshes = cells.map((cell, index) => (
        <Cell key={index} position={cell.position} color={(cell.column + cell.row) % 2 === 0 ? "white" : "lightgray"} column={cell.column} row={cell.row} />
    ));

    return <>{meshes}</>;
};

export default Board;
