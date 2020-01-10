import {
    PRODUCT_ADD,
    PRODUCT_DELETE,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes';

export const initialState = {
    items: []
}

const newItemTemp = {
    id: 0,
    name: 'newItem',
    description: 'newItem description'
}

const reducer = (state = initialState, action) => {
    const { items } = state;
    switch (action.type) {
        // 新增商品
        case PRODUCT_ADD:
            const newItem = {...newItemTemp},
                lastID = items[items.length - 1].id;
            newItem.id = lastID + 1;
            return {
                items: [...items, newItem]
            }
        // 刪除商品
        case PRODUCT_DELETE:
            return {
                items: items.filter((item) => item.id !== action.payload.itemID),
            }
        // 選擇商品
        // case SELECT_PRODUCT:
        //      option 1 array
        //          const newItems = items.map((item) => if(item.id === action.payload.itemID) item.selected === true );

        //      option 2 Normalize state shape
        //          const { itemID } = action.payload,
        //     return {
        //         selectID: itemID
        //     }

        // 確認商品
        // case SUBMIT_PRODUCT:
        //      option 1
        //          const selectedItem = items.find((item) => item.select === true);

        //      option 2 Normalize state shape
        //          const selectedItem = items[state.selectID];

        //     return {
        //         selectedItem
        //     }
        case FETCH_PRODUCTS_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                errormsg: action.payload
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                items: action.payload.data
            }

        default:
            return state
    }
}

export default reducer
