TO DO LIST
1. jest
2. husky
3. Heroku
4. react hooks
５. graphql


筆記

命名規則
https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/


middware 實作 https://cn.redux.js.org/docs/advanced/Middleware.html


ajax 一種通知reducer 請求開始的action fetch
ajax 一種通知reducer 請求成功的action fetch
ajax 一種通知reducer 請求失敗的action fetch
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }