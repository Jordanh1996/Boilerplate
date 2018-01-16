import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import AuthReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            auth: AuthReducer
        }
    ),
    composeEnchancers(applyMiddleware(thunk))
)

    
    return store;
}

