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
            console.log("err")
        }
    }

export default {
    saveList,
    updateCell
};