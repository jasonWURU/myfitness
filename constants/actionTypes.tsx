// auth

// product
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const SUBMIT_PRODUCT = 'SUBMIT_PRODUCT';
export const UNSUBMIT_PRODUCT = 'UNSUBMIT_PRODUCT';

export interface ProductType {
    ProductType: string
}

interface fetchProductsRequestAction {
    type: typeof FETCH_PRODUCTS_REQUEST
    payload: ProductType
}

export type ProductActionTypes = fetchProductsRequestAction;