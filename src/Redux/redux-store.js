import {createStore,combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import bestFriendReducer from './bestFriendReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    bestFriends:bestFriendReducer,
    usersPage :usersReducer
});

let store = createStore(reducers);

export default store;
