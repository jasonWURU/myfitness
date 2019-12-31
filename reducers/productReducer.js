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
    ]
}

const newItemTemp = {
    id: 0,
    name: 'newItem',
    content: 'newItem content'
}


// 應該用key去state找該obj ,不該將整個obj當參數傳下去
// const itemByid = (items, id) => items.find((item)=>item.id === id);

const reducer = (state = initialState, action) => {
    const { items } = state;

    switch (action.type) {
        // 新增商品
        case PRODUCT_ADD:
            const newItem = {...newItemTemp};
            newItem.id = items.length;
            return {
                items: [...items, newItem]
            }
        // 刪除商品
        case PRODUCT_DELETE:
            return {
                items: items.filter((item) => item.id !== action.payload.itemID),
            }
        // 
        default:
            return state
    }
}

export default reducer