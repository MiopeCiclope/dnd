import { ISquaretModel } from "../../models/square-model";
import { store } from "../store";
import types from "./cell-types";

const saveList = (cellList: ISquaretModel[]) => ({
    type: types.SAVE_CELL_LIST,
    payload: cellList
});


const updateCell = (newCell: ISquaretModel) =>
    (dispatch: any) => {
        const list = store.getState().cellReducer.list
        const index = list.indexOf(newCell);

        if (index !== -1) {
            list[index] = newCell;
            dispatch({
                type: types.SAVE_CELL_LIST,
                payload: [...list]
            });
        } else {
            console.log("err")
        }
    }

export default {
    saveList,
    updateCell
};