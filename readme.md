計算每週熱量
Day 1 TO Day 7
get calories every Day
3 dinner per day
filter by breakfast/dinner/launch
search by calories

TO DO LIST 
2. husky
3. Heroku
4. react hooks
5. graphql
6. thunk

６.寫測試

筆記

命名規則
https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/

react 生命週期
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
* 一般preloadedState > defaultValue,
* 如果使用combineReducers或reducer再次包裝則不一定(須小心)

正規化 (Normalize) Redux State
https://shubo.io/normalize-redux-state/
優點 整理一次 使用多次 
ex: byID allID

reducer 切分 “層”（slice）或者“域”（domain）
slice reducer
case function
higher-order reducer

redux是在combineReducers進行淺比較，有差異才render
*reducer返回的state對像都與傳入時一致，那麼combineReducers將返回當前的根state對象，而不是新構建的。

React-Redux是在 connect 進行淺比較

render的條件，是否同的參考(並非值相同)

data
breakfast
鬆餅(三片) 323kcal 10g Protein 8g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200028.product.html
豬肉滿福堡 278kcal 14g Protein 11g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200021.product.html
香鷄滿福堡 326kcal 13g Protein 15g fat
https://www.mcdonalds.com.tw/tw/ch/food/product_nutrition.nutrition.100001.200027.product.html


心得
state 結構的重要 應該保持 Normalize & 扁平化
不可變量參數 (優：更容易追踪，推導，數據處理的安全性，沒有副作用 ＊小心淺複製 ex: ...state ) ex: 有一推工具輔助
reducer 簡化重要 ex: slice reducer，higher-order reducer

是否要存入redux
＊應用的其他部分是否關心這個數據？
＊是否需要根據需要在原始數據的基礎上創建衍生數據？
＊相同的數據是否被用作驅動多個組件？
＊能否將狀態恢復到特定時間點（在時光旅行調試的時候）？
＊是否要緩存數據（比如：數據存在的情況下直接去使用它而不是重複去請求他）？

切分 presentation || container component
簡單而小的可以混合 presentation & container