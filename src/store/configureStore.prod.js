import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

export default function configureStore(initialState, history) {
  return createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  );
}
