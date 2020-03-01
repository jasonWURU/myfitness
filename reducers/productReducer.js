import { normalize, schema } from 'normalizr';
import {
    SELECT_PRODUCT,
    UNSUBMIT_PRODUCT,
    SUBMIT_PRODUCT,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes';

const itemSchema = new schema.Entity('items');

export const initialState = {
    allItems: [],
    byItem: {},
    selectedProductId: '',
    pastProductIds: [],
}

const reducer = (state = initialState, action) => {

    const { pastProductIds } = state; 

    switch (action.type) {

        // 選擇商品
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProductId: action.payload.productId,
            }

        // 確認送出
        case SUBMIT_PRODUCT:
            return {
                ...state,
                pastProductIds: [...pastProductIds, action.payload.selectedProductId],
                selectedProductId: ''
            }

        // 上一步
        case UNSUBMIT_PRODUCT:
            return {
                ...state,
                selectedProductId: pastProductIds[pastProductIds.length - 1],
                pastProductIds: pastProductIds.slice(0, pastProductIds.length - 1)
            }

        // 取得商品成功
        case FETCH_PRODUCTS_SUCCESS:
            const { entities: { items }, result } = normalize(action.payload.data, [itemSchema]);
            return {
                ...state,
                byItem: items,
                allItems: result
            }

        // 取得商品失敗
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                errormsg: action.payload.error
            }

        default:
            return state

    }

}

export default reducer
