export interface IBaseReducer<T> {
    list: T[]
}

export interface IBaseAction<T> {
    type: string
    payload: T | T[]
}