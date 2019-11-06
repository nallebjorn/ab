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
            title: "User cootarcher added successfully."
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
        addUserForm: {
            registeredFields: {
                username: {
                    name: "username",
                    type: "Field",
                    count: 1
                },
                password: {
                    name: "password",
                    type: "Field",
                    count: 1
                },
                email: {
                    name: "email",
                    type: "Field",
                    count: 1
                },
                phone: {
                    name: "phone",
                    type: "Field",
                    count: 1
                },
                role: {
                    name: "role",
                    type: "Field",
                    count: 1
                },
                name: {
                    name: "name",
                    type: "Field",
                    count: 1
                },
                surname: {
                    name: "surname",
                    type: "Field",
                    count: 1
                },
                address: {
                    name: "address",
                    type: "Field",
                    count: 1
                }
            },
            fields: {
                username: {
                    visited: true,
                    touched: true
                },
                password: {
                    visited: true,
                    touched: true
                },
                email: {
                    visited: true,
                    touched: true
                },
                phone: {
                    visited: true,
                    touched: true
                },
                role: {
                    visited: true,
                    touched: true
                },
                name: {
                    visited: true,
                    touched: true
                },
                surname: {
                    visited: true,
                    touched: true
                },
                address: {
                    visited: true,
                    touched: true
                }
            },
            anyTouched: true,
            values: {
                username: "cootarcher",
                password: "cootarcher",
                email: "murr-5918@yopmail.com",
                phone: "+73749943054",
                role: '{"id":2,"name":"provider"}',
                name: "Natsuki",
                surname: "Cosme",
                address: "7 Jennings Lane Far Rockaway, NY 11691"
            },
            submitSucceeded: true
        }
    }
};

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
