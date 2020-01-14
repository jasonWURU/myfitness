import { normalize, schema } from 'normalizr';
import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes';

const itemSchema = new schema.Entity('items');

export const initialState = {
    products: {
        result: [],
        entities: {}
    }
}

const reducer = (state = initialState, action) => {

    const { products } = state;

    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: normalize(action.payload.data, [itemSchema])
            }
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
