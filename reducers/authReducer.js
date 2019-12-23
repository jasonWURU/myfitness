import {
  FAILURE,
} from '../constants/actionTypes';

export const initialState = {
    name: 'jason`',
    phone: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAILURE:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    default:
      return state
  }
}

export default reducer