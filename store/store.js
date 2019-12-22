import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

const initialState = {

};



const store = creacteStore(
    reducers,
    initialState,
    // applyMiddleware(...middleware)
);

export default store;