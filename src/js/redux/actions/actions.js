export const SET_HEADER_TITLE = "SET_HEADER_TITLE";
export const setHeaderTitle = title => {
    return {
        type: SET_HEADER_TITLE,
        payload: title
    };
};

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const authenticateUserRequest = () => {
    return {
        type: AUTHENTICATE_USER_REQUEST
    };
};

export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const authenticateUserSuccess = posts => {
    return {
        type: AUTHENTICATE_USER_SUCCESS,
        payload: posts
    };
};

export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const authenticateUserFailure = error => {
    return {
        type: AUTHENTICATE_USER_FAILURE,
        payload: error
    };
};

export const login = (user, service) => async dispatch => {
    dispatch(authenticateUserRequest());
    try {
        const logginedUser = await service.authenticateUser(user);
        dispatch(authenticateUserSuccess(logginedUser));
        if (logginedUser.role) {
            dispatch(userLoginingIn());
        }
        dispatch(setHeaderTitle(logginedUser.message));
    } catch (error) {
        dispatch(authenticateUserFailure(error));
    }
};

export const USER_LOGINING_OUT = "USER_LOGINING_OUT";
export const userLoginingOut = () => {
    return {
        type: USER_LOGINING_OUT
    };
};
export const USER_LOGINING_IN = "USER_LOGINING_IN";
export const userLoginingIn = () => {
    return {
        type: USER_LOGINING_IN
    };
};

export const SET_SPARES = "SET_SPARES";
export const setSpares = spares => {
    return {
        type: SET_SPARES,
        payload: spares
    };
};
