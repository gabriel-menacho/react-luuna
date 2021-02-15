import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/';
import initialState from './store/initialState';
import { ConnectedRouter } from 'connected-react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

const createHistory = require("history").createHashHistory;
const history = createHistory({
  basename: '', // root
  hashType: 'slash' // the default
});
const store = configureStore(initialState, history);

if (process.NODE_ENV !== 'production') {
  // debugging purposes
  window.store = store;
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
