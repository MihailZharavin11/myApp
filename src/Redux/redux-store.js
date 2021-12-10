import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import bestFriendReducer from './bestFriendReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    bestFriends:bestFriendReducer,
    usersPage :usersReducer,
    auth:authReducer,
    form: formReducer,
    appReducer:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
