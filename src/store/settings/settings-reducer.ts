import { ISettingsModel } from "../../models/settings-model";
import { IBaseAction } from "../base-types";
import types from "./settings-types";

export type SettingReduxProp = {
    settings: ISettingsModel
}

const INITIAL_STATE = {
    settings: {
        selectCellColor: "#ffcccb",
        selectPlayerColor: "lightgreen",
        moveHighlightColor: "yellow"
    } as ISettingsModel
} as SettingReduxProp

const settingsReducer = (state = INITIAL_STATE, action: IBaseAction<ISettingsModel>) => {
    switch (action.type) {
        case types.SAVE_SETTINGS_LIST:
            return {
                ...state,
                settings: action.payload as ISettingsModel
            }
        default: return state;
    }
}

export default settingsReducer;