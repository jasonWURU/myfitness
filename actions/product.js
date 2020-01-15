import {
    FETCH_PRODUCTS_REQUEST,
    SELECT_PRODUCT,
    SUBMIT_PRODUCT
} from '../constants/actionTypes';

export const fetchProductsRequest = (productType) => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload: { productType }
});

export const selectedProduct = (prodoctId) => ({
    type: SELECT_PRODUCT,
    payload: { prodoctId }
});

export const submitProduct = (selectedProdoctId) => ({
    type: SUBMIT_PRODUCT,
    payload: { selectedProdoctId }
})
