import { combineReducers } from 'redux';

import user, { initialState as userState } from './userReducer';
import product, { initialState as productState } from './productReducer';

export const initialState = {
    user: userState,
    product: productState,
};

export default combineReducers({
    user,
    product
});
