import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import app from "./../reducers/reducer";

const rootReducer = combineReducers({
    app,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
