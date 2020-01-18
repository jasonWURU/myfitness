import { normalize, schema } from 'normalizr';

import {
  SUBMIT_PRODUCT
} from '../constants/actionTypes';


export const initialState = {
  calories: 0,
  protein: 0,
  height: 0, 
  weight: 0,
  nowDay: 1,
  byDay: {
    1: {
      id: 1,
      name: 'Monday',
      products: [],
    },
    2: {
      id: 2,
      name: 'Tuesday',
      products: [],
    },
    3: {
      id: 3,
      name: 'Wednesday',
      products: [],
    },
    4: {
      id: 4,
      name: 'Thursday',
      products: [],
    },
    5: {
      id: 5,
      name: 'Friday',
      products: [],
    },
    6: {
      id: 6,
      name: 'Saturdayz',
      products: [],
    },
    7: {
      id: 7,
      name: 'Sunday',
      products: [],
    }
  },
  allDays: [1, 2, 3, 4, 5, 6, 7]
}

const reducer = (state = initialState, action) => {

  const { nowDay, byDay } = state;

  switch (action.type) {

    case SUBMIT_PRODUCT:
      return {
          ...state,
          nowDay: nowDay + 1,
          byDay: { ...byDay, [nowDay]: { ...byDay[nowDay], products: [action.payload.selectedProdoctId] } }
      }

    default:
      return state
  }

}

export default reducer