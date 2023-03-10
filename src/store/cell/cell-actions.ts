import { ICharacterModel } from "../../models/character-model";
import { ISquaretModel } from "../../models/square-model";
import { updateElement } from "../../utils/list-operation";
import { store } from "../store";
import types from "./cell-types";

const saveList = (cellList: ISquaretModel[]) => ({
    type: types.SAVE_CELL_LIST,
    payload: cellList
});


const updateCell = (newCell: ISquaretModel) =>
    (dispatch: any) => {
        const list = store.getState().cellReducer.list
        const newList = updateElement(list, newCell)

        if (newList !== null) {
            dispatch({
                type: types.SAVE_CELL_LIST,
                payload: newList
            });
        } else {
            console.log("cell doesn't exist")
        }
    }

const moveInChar = (cell: ISquaretModel, character: ICharacterModel) =>
    (dispatch: any) => {
        if (cell.character === undefined) {
            cell.character = character
            return dispatch(updateCell(cell))
        } else {
            console.log("cell is full")
        }
    }

const moveOutChar = (cell: ISquaretModel) =>
    (dispatch: any) => {
        cell.character = undefined
        return dispatch(updateCell(cell))
    }

export default {
    saveList,
    updateCell,
    moveInChar,
    moveOutChar
};