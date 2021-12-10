import { profileAPI } from "../API/api";

const ADD_POST_ELEMENT = 'profilePage/ADD-POST-ELEMENT';
const SET_USERS_PROFILE = 'profilePage/SET_USERS_PROFILE';
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';

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
        case DELETE_POST:
            return {
                ...state,
                postsData:state.postsData.filter((element)=>element.id != action.postId)
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

export const deletePost = (postId) =>{
    return {
        type: DELETE_POST,
        postId
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
    return async (dispatch) =>{
        let response = await profileAPI.showUserProfile(userId);
        if(response){
            dispatch(setUsersProfile(response));
        }
    };
};

export const getUserStatus = (userId) =>{
    return async (dispatch) =>{
        let response = await profileAPI.getStatus(userId);
        if(response){
            dispatch(setStatus(response));
        }
    };
};

export const updateUserStatus = (status) =>{
    return async (dispatch) =>{
        let response = await profileAPI.updateStatus(status);
        if(response.resultCode!==1){
            dispatch(setStatus(status));
        }
      
    };
};

export default profileReducer;