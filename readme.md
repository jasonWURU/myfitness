計算每週熱量
Day 1 TO Day 7
get calories every Day
3 dinner per day
filter by breakfast/dinner/launch
search by calories
統計 
total calories a week

{
    posts : {
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                comments : ["comment3", "comment4", "comment5"]
            }
        }
        allIds : ["post1", "post2"]
    },
    comments : {
        byId : {
            "comment1" : {
                id : "comment1",
                author : "user2",
                comment : ".....",
            },
            "comment2" : {
                id : "comment2",
                author : "user3",
                comment : ".....",
            },
            "comment3" : {
                id : "comment3",
                author : "user3",
                comment : ".....",
            },
            "comment4" : {
                id : "comment4",
                author : "user1",
                comment : ".....",
            },
            "comment5" : {
                id : "comment5",
                author : "user3",
                comment : ".....",
            },
        },
        allIds : ["comment1", "comment2", "comment3", "commment4", "comment5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            }
            "user2" : {
                username : "user2",
                name : "User 2",
            }
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
}
TO DO LIST 
2. husky
3. Heroku
4. react hooks
５. graphql

６.寫測試

筆記

命名規則
https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/

react liftcycle
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

middware 實作 https://cn.redux.js.org/docs/advanced/Middleware.html

ajax 一種通知reducer 請求開始的action fetch
ajax 一種通知reducer 請求成功的action fetch
ajax 一種通知reducer 請求失敗的action fetch
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }

undo 問題
https://cn.redux.js.org/docs/recipes/ImplementingUndoHistory.html
範例結構如下：
{
  counter: {
    past: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
    present: 8,
    future: [ 9, 10 ]
  }
}
兩個action： undo & redo



初始化State - 兩種方式
1. createStore的第二個參數 preloadedState(服務端可由此注入)
2. reducer 的 預設參數 state = defaultValue
一般preloadedState > defaultValue,

正規化 (Normalize) Redux State
https://shubo.io/normalize-redux-state/

reducer 切分
slice reducer
case function
higher-order reducer

應該用key去state找該obj ,不該將整個obj當參數傳下去

data
breakfast
鬆餅(三片) 323kcal 10g Protein 8g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200028.product.html
豬肉滿福堡 278kcal 14g Protein 11g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200021.product.html
香鷄滿福堡 326kcal 13g Protein 15g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200027.product.html


心得
state 結構的重要 ex: Normalize
不可變量參數 (小心淺複製 ex: ...state ) ex: 有一推工具輔助
reducer 簡化重要 ex: slice reducer，higher-order reducer