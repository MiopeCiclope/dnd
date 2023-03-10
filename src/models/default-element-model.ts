import { Vector3 } from "three"

export interface IDefaultElementModel {
    id: number
    position: Vector3
    color: string
    row: number
    column: number
    isSelected: boolean
}
