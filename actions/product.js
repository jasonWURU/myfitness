import {
    FETCH_PRODUCTS_REQUEST
} from '../constants/actionTypes';

export const fetchProductsRequest = (productType) => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload: { productType }
});