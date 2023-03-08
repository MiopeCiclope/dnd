import { ISquaretModel } from "../../models/square-model";
import { IBaseAction, IBaseReducer } from "../base-types";
import types from "./cell-types";

const INITIAL_STATE = {
    list: [],
} as IBaseReducer<ISquaretModel>;

const cellReducer = (state = INITIAL_STATE, action: IBaseAction<ISquaretModel>) => {
    switch (action.type) {
        case types.SAVE_CELL_LIST:
            return {
                ...state,
                list: action.payload as ISquaretModel[]
            }
        default: return state;
    }
}

export default cellReducer;