import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import { authReducer } from './Auth/auth.reducer';



const rootReducer = combineReducers({
authStore : authReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));