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
    // 當 dispatch FETCH_PRODUCTS_REQUEST 時 
    // 會先到saga的 fetchProductsFlow 依據 這個流程繼續往下執行
    // 可能會是另一個流程 or 直接 往 reducer
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts)

}