import { ICharacterModel } from "../../models/character-model";
import { IBaseAction, IBaseReducer } from "../base-types";
import types from "./character-types";

const INITIAL_STATE = {
    list: [],
} as IBaseReducer<ICharacterModel>;

const characterReducer = (state = INITIAL_STATE, action: IBaseAction<ICharacterModel>) => {
    switch (action.type) {
        case types.SAVE_CHARACTER_LIST:
            return {
                ...state,
                list: action.payload as ICharacterModel[]
            }
        default: return state;
    }
}

export default characterReducer;