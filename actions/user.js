import {
    SUBMIT_PRODUCT
} from '../constants/actionTypes';

export const submitProduct = (selectedProdoctId) => ({
    type: SUBMIT_PRODUCT,
    payload: { selectedProdoctId }
})
