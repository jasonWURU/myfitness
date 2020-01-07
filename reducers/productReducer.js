import {
    PRODUCT_ADD,
    PRODUCT_DELETE
} from '../constants/actionTypes';

const McLink = 'https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.${0}.product.html'

export const initialState = {
    items: [
        {
            id: 'muffin',
            name: '鬆餅(三片)',
            // url: `${McLink.replace()}`,
            type: 'breakfast',
            calories: '323k',
            protein: '10g',
            fat: '8g',
            description: '當奶油球遇見熱騰騰的鬆餅，情不自禁的溶化，伴隨著甜蜜入心的鬆餅糖漿，那鬆綿軟密的口感，給早晨幸福的味道！'
        },
        {
            id: 'Sausage McMuffin',
            name: '豬肉滿福堡',
            type: 'breakfast',
            calories: '278k',
            protein: '14g',
            fat: '11g',
            description: '以天然酵母喚醒滿福堡麵包的生命力，越嚼越有勁！搭配香煎豬肉和吉事完美的融化，早晨因此更美好！'
        },
        {
            id: 'Chicken McMuffin',
            name: '香鷄滿福堡',
            type: 'breakfast',
            calories: '326k',
            protein: '13g',
            fat: '15g',
            description: '以天然酵母喚醒滿福堡麵包的生命力，Q脆俐落的黃金雞肉排，鮮嫩彈牙愈嚼愈帶勁！'
        }
    ]
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
        default:
            return state
    }
}

export default reducer