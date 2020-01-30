import { put, takeLatest, call } from 'redux-saga/effects'

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes'

import { getFoods } from '../api/ProductAPI';

export function* fetchProducts({ payload: { productType } }) {
    
    try {

        const data = yield call(getFoods, productType);
        yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: data });

     }
     catch (error) {

        yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error })

     }

}

export default function* rootSaga() {

    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts)

}