import { profileAPI } from "../API/api";

const ADD_POST_ELEMENT = 'ADD-POST-ELEMENT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [{
        id: 1,
        message: 'Hi, how are u?',
        likes: 20
    }, {
        id: 2,
        message: "It's my first post",
        likes: 30
    }],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST_ELEMENT:
            return {
                ...state,
                postsData: [...state.postsData,{id:5,message:action.message,likes:0}]
            };
        case SET_USERS_PROFILE:
            return{
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status:action.status
            };
        default:
            return state;
    }
};

export const addPost = (message) =>{
    return {
      type: ADD_POST_ELEMENT,
      message
    };
  };

export const setUsersProfile = (profile) =>{
    return {
        type: SET_USERS_PROFILE,
        profile
    };
};

export const setStatus = (status) =>{
    return {
        type:SET_USER_STATUS,
        status
    };
};

export const showUser = (userId) =>{
    return (dispatch) =>{
        profileAPI.showUserProfile(userId).then(data =>{
            dispatch(setUsersProfile(data));
        });
    };
};

export const getUserStatus = (userId) =>{
    return (dispatch) =>{
        profileAPI.getStatus(userId).then(data =>{
            dispatch(setStatus(data));
        });
    };
};

export const updateUserStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updateStatus(status).then(data =>{
            if(data.resultCode!==1){
                dispatch(setStatus(status));
            }
        });
    };
};

export default profileReducer;