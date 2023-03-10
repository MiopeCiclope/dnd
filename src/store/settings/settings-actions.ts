import { ISettingsModel } from "../../models/settings-model";
import types from "./settings-types";

const saveSettings = (settingsList: ISettingsModel) => ({
    type: types.SAVE_SETTINGS_LIST,
    payload: settingsList
});

export default {
    saveSettings
};