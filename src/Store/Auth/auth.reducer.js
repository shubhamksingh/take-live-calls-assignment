import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_LOADING, LOGOUT_SUCCESS, SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./auth.types";


const initialState = {
    loading: false,
    user: null,
    error: null,
    };
    


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_LOADING:
        return {
            ...state,
            loading: true,
        };
        case SIGN_UP_SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.payload,
        };
        case SIGN_UP_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        case LOGIN_LOADING:
        return {
            ...state,
            loading: true,
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.payload,
        };
        case LOGIN_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        case LOGOUT_LOADING:
        return {
            ...state,
            loading: true,
        };
        case LOGOUT_SUCCESS:
        return {
            ...state,
            loading: false,
            user: null,
        };
        case LOGOUT_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
    };
