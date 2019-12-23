import { combineReducers } from 'redux';
import main, { initialState as mainState } from './mainReducer';
import auth, { initialState as authState } from './authReducer';

export const initialState = {
    auth: authState,
    main: mainState
};

export default combineReducers({
    main,
    auth
});