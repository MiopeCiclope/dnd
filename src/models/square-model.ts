import { ICharacterModel } from "./character-model"
import { IDefaultElementModel } from "./default-element-model"

export interface ISquaretModel extends IDefaultElementModel {
    highlightMoveElement: boolean
    character: ICharacterModel | undefined
}
