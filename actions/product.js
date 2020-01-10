import {
    PRODUCT_ADD,
    PRODUCT_DELETE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from '../constants/actionTypes';

export const addProduct = () => ({ type: PRODUCT_ADD });

export const deleteProduct = (itemID) => ({ type: PRODUCT_DELETE, payload: {itemID} });

export const fetchProductsRequest = (productType) => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload: { productType }
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload:  { error }
});

export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
});