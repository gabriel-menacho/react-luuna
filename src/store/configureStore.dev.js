// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

export default function configureStore(initialState, history) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
      // add support for Redux dev tools, if enabled. Otherwise, do nothing. Updated to work on v.2.7+
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
