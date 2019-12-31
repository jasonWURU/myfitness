import {
    PRODUCT_ADD,
    PRODUCT_DELETE
} from '../constants/actionTypes';

export const initialState = {
    items: [
        {
            id: 0,
            name: '2019 Macbook pro',
            content: '2019macbook 2019macbook 2019macbook'
        },
        {
            id: 1,
            name: '2019 iMac',
            content: '2019imac 2019imac 2019imac'
        },
        {
            id: 2,
            name: '2019 iMac',
            content: '2019imac 2019imac 2019imac'
        }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {
                ...state,
                items: [...state.items, { id: state.items.length, name: 'new', content: 'new content' }]
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                items: [...state.items].filter((item) => item.id !== action.payload),
            }
        default:
            return state
    }
}

export default reducer