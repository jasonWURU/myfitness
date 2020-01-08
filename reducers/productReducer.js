import {
    PRODUCT_ADD,
    PRODUCT_DELETE
} from '../constants/actionTypes';

import McItems, { getMcProducts } from '../fakeData/product';

export const initialState = {
    items: [...McItems]
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
        //         selectIDs: itemID
        //     }

        // 確認商品
        // case SUBMIT_PRODUCT:
        //      option 1
        //          const selectedItem = items.find((item) => item.select === true);

        //      option 2 Normalize state shape
        //          const selectedItem = items[state.selectIDs];

        //     return {
        //         selectedItem
        //     }


        default:
            return state
    }
}

export default reducer
