import {
    FETCH_PRODUCTS_REQUEST,
    SELECT_PRODUCT,
    UNSUBMIT_PRODUCT,
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

export const unSubmitProduct = (selectedProdoctId) => ({
    type: UNSUBMIT_PRODUCT,
    payload: { selectedProdoctId }
})
