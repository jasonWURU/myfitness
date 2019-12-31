import {
    PRODUCT_ADD,
    PRODUCT_DELETE
} from '../constants/actionTypes';

export const addProduct = () => ({ type: PRODUCT_ADD });
export const deleteProduct = (itemID) => ({ type: PRODUCT_DELETE, payload: itemID });