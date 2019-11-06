import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import app from "./../reducers/reducer";

const rootReducer = combineReducers({
    app,
    form: formReducer
});

const init = {
    app: {
        header: {
            title: "Welcome to website, golont."
        },
        user: {
            isLogged: true,
            username: "golont",
            password: null,
            email: "golont@mail.com",
            phone: "+79117366587",
            role: {
                id: 3,
                name: "admin"
            },
            message: "Welcome to website, golont."
        },
        loading: false,
        error: false
    },
    form: {
        loginForm: {
            submitSucceeded: true
        }
    }
};

const store = createStore(rootReducer, init, applyMiddleware(Thunk));

export default store;
