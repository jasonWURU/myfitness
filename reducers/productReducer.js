import { normalize, schema } from 'normalizr';
import {
    SELECT_PRODUCT,
    SUBMIT_PRODUCT,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes';

const itemSchema = new schema.Entity('items');

export const initialState = {
    allItems: [],
    byItem: {},
    selectedProdoctId: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        // 選擇商品
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProdoctId: action.payload.prodoctId
            }

        // 確認送出
        case SUBMIT_PRODUCT:
            return {
                ...state,
                selectedProdoctId: ''
            }

        // 取得商品成功
        case FETCH_PRODUCTS_SUCCESS:
            const { entities: { items }, result } = normalize(action.payload.data, [itemSchema]);
            return {
                ...state,
                byItem: items,
                allItems: result
            }

        // 取得商品
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
