import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import app from "./../reducers/reducer";

const rootReducer = combineReducers({
    app,
    form: formReducer
});

const store = createStore(rootReducer);

export default store;
