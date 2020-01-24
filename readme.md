計算每週熱量
Day 1 TO Day 7
get calories every Day
3 dinner per day
filter by breakfast/dinner/launch
search by calories

TO DO LIST 
7. typescript
4. react hooks
6. 寫測試

2. husky
3. Heroku
8. gatsbyjs
6. thunk
5. graphql

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