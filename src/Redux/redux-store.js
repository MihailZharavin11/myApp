import {createStore,combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import bestFriendReducer from './bestFriendReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    bestFriends:bestFriendReducer,
});

let store = createStore(reducers);

export default store;
