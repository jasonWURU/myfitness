import { combineReducers } from 'redux';
import auth, { initialState as authState } from './authReducer';
import product, { initialState as productState } from './productReducer';

export const initialState = {
    auth: authState,
    product: productState,
};

export default combineReducers({
    auth,
    product
});