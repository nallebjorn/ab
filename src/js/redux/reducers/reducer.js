import * as Actions from "Actions/actions";

const initialState = {
    header: {
        title: "Login to website."
    },
    user: {
        isLogged: false,
        name: ""
    }
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.SET_HEADER_TITLE:
            return {
                ...state,
                header: { title: payload }
            };
        default:
            return state;
    }
};

export default reducer;
