import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer, { initialState } from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export const initializeStore = (preloadedState = initialState) => {

  const sagaMiddleware = createSagaMiddleware(),
    store = createStore(
      reducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

  sagaMiddleware.run(rootSaga);

  return store;

}
