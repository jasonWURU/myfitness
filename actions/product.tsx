import {
  FETCH_PRODUCTS_REQUEST,
  SELECT_PRODUCT,
  UNSUBMIT_PRODUCT,
  SUBMIT_PRODUCT,
  // ProductActionTypes,
  ProductType
} from '../constants/actionTypes';

export const fetchProductsRequest = (productType:ProductType) => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload: { productType },
});

export const selectedProduct = (productId: ProductType) => ({
  type: SELECT_PRODUCT,
  payload: { productId },
});

export const submitProduct = (selectedProductId: ProductType) => ({
  type: SUBMIT_PRODUCT,
  payload: { selectedProductId },
});

export const unSubmitProduct = (selectedProductId: ProductType) => ({
  type: UNSUBMIT_PRODUCT,
  payload: { selectedProductId },
});
