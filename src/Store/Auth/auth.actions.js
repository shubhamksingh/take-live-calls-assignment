// 


import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./auth.types";


export const signupUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: SIGN_UP_LOADING });
        const res = await axios.post(`https://take-live-backend-production.up.railway.app/auth/signup`, user);
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: SIGN_UP_ERROR, payload: err.response.data});
        throw new Error(err);
    }
};

export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_LOADING });
        const res = await axios.post(`https://take-live-backend-production.up.railway.app/auth/login`, user);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        console.log(res.data);
        if(!res.data.err)alert('login success');
        // else alert('login failed');
    } catch (err) {
        alert('login failed');
        dispatch({ type: LOGIN_ERROR, payload: err.response.data});
        throw new Error(err);
    }
}
