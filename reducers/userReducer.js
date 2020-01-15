import {
  SUBMIT_PRODUCT
} from '../constants/actionTypes';

export const initialState = {
  calories: 0,
  protein: 0,
  height: 0, 
  weight: 0,
  record: [
    {
      day: 1,
      productId: '123' 
    },
    {
      day: 2,
      productId: '123' 
    }
  ]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SUBMIT_PRODUCT:
      return {
          ...state,
          selectedProdoctIdjason: action.payload.selectedProdoctIdjason
      }

    default:
      return state
  }

}

export default reducer