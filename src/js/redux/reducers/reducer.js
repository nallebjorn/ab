import * as Actions from "./../actions/actions";

const initialState = {
    header: {
        title: "Login to website."
    },
    user: {
        isLogged: false
    },
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.USER_LOGINING_OUT:
            return initialState;
        case Actions.USER_LOGINING_IN:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLogged: true
                }
            };
        case Actions.SET_HEADER_TITLE:
            return {
                ...state,
                header: { title: payload }
            };
        case Actions.AUTHENTICATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Actions.AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                },
                loading: false,
                error: false
            };
        case Actions.AUTHENTICATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            };

        default:
            return state;
    }
};

export default reducer;
