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
            id: 13,
            name: "Eugen",
            surname: "Dubal",
            address: "18 alert street",
            username: "provider",
            password: "provider",
            email: "provider@mail.com",
            phone: "+7911857372",
            role: {
                id: 2,
                name: "provider"
            },
            message: "Welcome to website, provider."
        },
        loading: false,
        error: false,
        spares: [
            {
                id: "2cb230fc-8873-499d-b714-b28e1e3d7b00",
                category: {
                    id: 2,
                    name: "Детали к дополнительным агрегатам"
                },
                carMark: {
                    id: 2,
                    name: "Volkswagen"
                },
                provider: {
                    id: 13,
                    name: "Eugen",
                    surname: "Dubal",
                    address: "18 alert street",
                    username: "provider",
                    password: "provider",
                    email: "provider@mail.com",
                    phone: "+7911857372",
                    role: {
                        id: 2,
                        name: "provider"
                    },
                    message: null
                },
                name: "SpareName number one",
                description:
                    "Spare_description_Spare_description_ Spare_description_ Spare_description_ Spare_description_",
                price: "55338$",
                vin: "D88DK",
                images: [
                    {
                        content: null,
                        encoding: null,
                        id: "19",
                        name: null,
                        url:
                            "/Images/13/4c55ff56-ee95-48eb-a82f-51d9a293587c.jpg"
                    },
                    {
                        content: null,
                        encoding: null,
                        id: "20",
                        name: null,
                        url:
                            "/Images/13/504f640c-8d72-4b83-bba8-f27316bbbe67.jpg"
                    },
                    {
                        content: null,
                        encoding: null,
                        id: "21",
                        name: null,
                        url:
                            "/Images/13/a7069e8c-1902-4ff8-890e-7d7015bcad61.jpg"
                    },
                    {
                        content: null,
                        encoding: null,
                        id: "22",
                        name: null,
                        url:
                            "/Images/13/477999db-c526-4a73-a766-a4d0ae2a8bfc.jpg"
                    }
                ]
            },
            {
                id: "38cff907-bf0a-4f4d-99d1-c10f4083938f",
                category: {
                    id: 1,
                    name: "Детали кузова"
                },
                carMark: {
                    id: 2,
                    name: "Volkswagen"
                },
                provider: {
                    id: 13,
                    name: "Eugen",
                    surname: "Dubal",
                    address: "18 alert street",
                    username: "provider",
                    password: "provider",
                    email: "provider@mail.com",
                    phone: "+7911857372",
                    role: {
                        id: 2,
                        name: "provider"
                    },
                    message: null
                },
                name: "Someanem",
                description: "dfjklasljk",
                price: "823489D",
                vin: "hksdj#",
                images: [
                    {
                        content: null,
                        encoding: null,
                        id: "31",
                        name: null,
                        url:
                            "/Images/13/5e7a84aa-1e49-4287-adb3-3d0e60367ae0.jpg"
                    }
                ]
            },
            {
                id: "5589485d-677a-401d-99d7-f02ccbf1db6d",
                category: {
                    id: 5,
                    name: "Ходовая часть"
                },
                carMark: {
                    id: 2,
                    name: "Volkswagen"
                },
                provider: {
                    id: 13,
                    name: "Eugen",
                    surname: "Dubal",
                    address: "18 alert street",
                    username: "provider",
                    password: "provider",
                    email: "provider@mail.com",
                    phone: "+7911857372",
                    role: {
                        id: 2,
                        name: "provider"
                    },
                    message: null
                },
                name: "SpareName number two",
                description:
                    "Spare_description_Spare_description_ Spare_description_ Spare_description_ Spare_description_",
                price: "558EUR",
                vin: "H77JS",
                images: [
                    {
                        content: null,
                        encoding: null,
                        id: "23",
                        name: null,
                        url:
                            "/Images/13/a7069e8c-1902-4ff8-890e-7d7015bcad61.jpg"
                    },
                    {
                        content: null,
                        encoding: null,
                        id: "24",
                        name: null,
                        url:
                            "/Images/13/477999db-c526-4a73-a766-a4d0ae2a8bfc.jpg"
                    }
                ]
            },
            {
                id: "a21e559c-4a17-44f5-8462-b9e79d59d2f7",
                category: {
                    id: 3,
                    name: "Детали двигателя и навесного оборудования"
                },
                carMark: {
                    id: 2,
                    name: "Volkswagen"
                },
                provider: {
                    id: 13,
                    name: "Eugen",
                    surname: "Dubal",
                    address: "18 alert street",
                    username: "provider",
                    password: "provider",
                    email: "provider@mail.com",
                    phone: "+7911857372",
                    role: {
                        id: 2,
                        name: "provider"
                    },
                    message: null
                },
                name: "new Name",
                description:
                    "new Descriptionnew Descriptionnew Descriptionnew Description",
                price: "737ROD",
                vin: "383JDU@JD",
                images: [
                    {
                        content: null,
                        encoding: null,
                        id: "25",
                        name: null,
                        url:
                            "/Images/13/f1a6ed6e-ea45-4784-8586-4426c11f02ec.JPG"
                    }
                ]
            }
        ]
    },
    form: {
        loginForm: {
            submitSucceeded: true
        }
    }
};

const store = createStore(rootReducer, init, applyMiddleware(Thunk));

export default store;
