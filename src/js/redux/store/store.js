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
            title: "Welcome to website, provider."
        },
        user: {
            isLogged: true,
            username: "provider",
            password: "provider",
            email: "provider@mail.com",
            phone: "+7911857372",
            role: {
                id: 2,
                name: "provider"
            },
            message: "Welcome to website, provider.",
            id: 13,
            name: "Eugen",
            surname: "Dubal",
            address: "18 alert street"
        },
        loading: false,
        error: false
    },
    form: {
        addSpareForm: {
            registeredFields: {
                category: {
                    name: "category",
                    type: "Field",
                    count: 1
                },
                carMark: {
                    name: "carMark",
                    type: "Field",
                    count: 1
                },
                name: {
                    name: "name",
                    type: "Field",
                    count: 1
                },
                description: {
                    name: "description",
                    type: "Field",
                    count: 1
                },
                price: {
                    name: "price",
                    type: "Field",
                    count: 1
                },
                vin: {
                    name: "vin",
                    type: "Field",
                    count: 1
                }
            },
            fields: {
                category: {
                    touched: true,
                    visited: true
                },
                carMark: {
                    touched: true,
                    visited: true
                },
                name: {
                    touched: true,
                    visited: true
                },
                description: {
                    touched: true,
                    visited: true
                },
                price: {
                    touched: true,
                    visited: true
                },
                vin: {
                    touched: true,
                    visited: true
                }
            },
            anyTouched: true,
            submitFailed: true,
            values: {
                category: "1",
                carMark: "2",
                name: "Some spare name",
                description: "some spare description",
                price: "82810RUB",
                vin: "HY2829HD"
            }
        }
    }
};
const store = createStore(rootReducer, init, applyMiddleware(Thunk));

export default store;
