import { ISquaretModel } from "../../models/square-model";
import types from "./cell-types";

const saveList = (cellList: ISquaretModel[]) => ({
    type: types.SAVE_CELL_LIST,
    payload: cellList
});

export default {
    saveList
};