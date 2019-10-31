import * as Actions from "./../actions/actions";

const reducer = (state, action) => {
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
