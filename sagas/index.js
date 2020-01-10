import { put, takeEvery, all } from 'redux-saga/effects'
// put 類似 dispatch

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes'

import { getFoods } from '../api/ProductAPI';

export function* fetchProductsRequest(type) {

    try {

        const data = yield call(getFoods, type);
        yield put({type: FETCH_PRODUCTS_SUCCESS, data});

     }
     catch (error) {

        yield put({type: FETCH_PRODUCTS_FAILURE, error})

     }

}

export default function* rootSaga() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsRequest)
}