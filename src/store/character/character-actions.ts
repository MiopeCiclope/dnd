import { Vector3 } from "three";
import { ICharacterModel } from "../../models/character-model";
import { updateElement } from "../../utils/list-operation";
import { store } from "../store";
import types from "./character-types";

const saveList = (characterList: ICharacterModel[]) => ({
    type: types.SAVE_CHARACTER_LIST,
    payload: characterList
});


const updateCharacter = (newcharacter: ICharacterModel) =>
    (dispatch: any) => {
        const list = store.getState().characterReducer.list
        const newList = updateElement(list, newcharacter)

        if (newList !== null) {
            dispatch({
                type: types.SAVE_CHARACTER_LIST,
                payload: newList
            });
        } else {
            console.log("character doesn't exist")
        }
    }

const moveChar = (char: ICharacterModel, position: Vector3) =>
    (dispatch: any) => {
        char.position = position
        return dispatch(updateCharacter(char))
    }

const updateAvatar = (char: ICharacterModel, image: string) =>
    (dispatch: any) => {
        char.image = image
        return dispatch(updateCharacter(char))
    }

export default {
    saveList,
    updateCharacter,
    moveChar,
    updateAvatar
};