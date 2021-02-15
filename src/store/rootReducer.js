import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ajaxCall from './reducers/ajaxCall/reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ajaxCall
});

export default createRootReducer;