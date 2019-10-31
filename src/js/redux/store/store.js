import { createStore } from 'redux';
import reducer from './../reducers/reducer';

const initialState = {
    header: {
        title: "Login to website"
    },
    user: {
        isLogged: false, 
        name: ""
    }
}

const store = createStore(reducer, initialState);

export default store;