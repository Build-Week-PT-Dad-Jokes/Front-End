import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { jokesReducer } from './JokesReducer';

export const rootReducer = combineReducers({userReducer, combineReducers});