// class MyApp extends App {
//     render () {
//       const {Component, pageProps} = this.props
//       return (
//         <Container>
//           <Component {...pageProps} />
//         </Container>
//       )
//     }
// }
// export default MyApp


import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)