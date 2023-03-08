import { createStore, applyMiddleware, Store, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IBaseReducer } from "./base-types";
import { ISquaretModel } from "../models/square-model";
import cellReducer from "./cell/cell-reducer"

export interface ApplicationState {
    cellReducer: IBaseReducer<ISquaretModel>
}

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["cellReducer"],
};

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const presistedReducer = persistReducer(persistConfig, combineReducers({
    cellReducer
}));

const store: Store<ApplicationState> = createStore(
    presistedReducer,
    composeEnhancers()
);

const persistor = persistStore(store);

export { store, persistor };
