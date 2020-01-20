const McLink = 'https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.${0}.product.html'

const  McProducts =  [
    {
        id: 'Muffin',
        name: '鬆餅(三片)',
        // url: `${McLink.replace()}`,
        type: 'breakfast',
        calories: '323',
        protein: '10',
        fat: '8',
        description: '當奶油球遇見熱騰騰的鬆餅，情不自禁的溶化，伴隨著甜蜜入心的鬆餅糖漿，那鬆綿軟密的口感，給早晨幸福的味道！'
    },
    {
        id: 'SausageMcMuffin',
        name: '豬肉滿福堡',
        type: 'breakfast',
        calories: '278',
        protein: '14',
        fat: '11',
        description: '以天然酵母喚醒滿福堡麵包的生命力，越嚼越有勁！搭配香煎豬肉和吉事完美的融化，早晨因此更美好！'
    },
    {
        id: 'ChickenMcMuffin',
        name: '香鷄滿福堡',
        type: 'breakfast',
        calories: '326',
        protein: '13',
        fat: '15',
        description: '以天然酵母喚醒滿福堡麵包的生命力，Q脆俐落的黃金雞肉排，鮮嫩彈牙愈嚼愈帶勁！'
    }
]

export const getMcProducts = (type) =>  {

    return new Promise((resolve, reject) => {
        
        if (type !== '') {

            const respon = {
                result: 0,
                data: [],
            }

            switch (type) {
                case 'breakfast':
                case 'lunch':
                case 'dinner':
                    respon.result = 1,
                    respon.data = McProducts.filter((item) => item.type === type);
                    break;
                default:
                    break;
            }

            setTimeout(() => {

                resolve(respon);

            }, 1000);

        } 
        else { 

            reject('something wrong');

        }

    });
 
}

export default McProducts;