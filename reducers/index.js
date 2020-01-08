import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
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

// export const getProduect = (state) => state.ids.map(id => state.byId[id]); Selector
