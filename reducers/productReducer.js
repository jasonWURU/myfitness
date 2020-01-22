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
    selectedProdoctId: '',
    pastProdoctIds: [],
}

const reducer = (state = initialState, action) => {

    const { pastProdoctIds } = state; 

    switch (action.type) {

        // 選擇商品
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProdoctId: action.payload.prodoctId,
            }

        // 確認送出
        case SUBMIT_PRODUCT:
            return {
                ...state,
                pastProdoctIds: [...pastProdoctIds, action.payload.selectedProdoctId],
                selectedProdoctId: ''
            }

        // 上一步
        case UNSUBMIT_PRODUCT:
            return {
                ...state,
                selectedProdoctId: pastProdoctIds[pastProdoctIds.length - 1],
                pastProdoctIds: pastProdoctIds.slice(0, pastProdoctIds.length - 1)
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
