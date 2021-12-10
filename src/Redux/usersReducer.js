import {
    userAPI
} from "../API/api";
import { updateObjectToArrays } from "../Utils/object-helper";


const FOLLOWED_USER = 'usersPage/FOLLOWED_USER';
const UNFOLLOWED_USER = "usersPage/UNFOLLOWED_USER";
const SET_USER = "usersPage/SET_USER";
const SET_CURRENTPAGE = "usersPage/SET_CURRENTPAGE";
const SET_TOTALCOUNTS = "usersPage/SET_TOTALCOUNTS";
const TOOGLE_IS_FETCHING = 'usersPage/TOOGLE_IS_FETCHING';
const FOLLOWING_PROGRESS = 'usersPage/FOLLOWING_PROGRESS';

let initialState = {
    users: [

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};




const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWED_USER:
            return {
                ...state,
                users: updateObjectToArrays(state.users,action.userId,"id", {followed:true})
                // ...state,
                // users:state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: true
                //         };
                //     }
                //     return u;
                // }),
            };
        case UNFOLLOWED_USER:
            return {
                ...state,
                users: updateObjectToArrays(state.users,action.userId,"id",{followed:false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: false
                //         };
                //     }
                //     return u;
                // })
            };
        case SET_USER:
            return {
                ...state,
                users: action.allUsers
            };
        case SET_CURRENTPAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_TOTALCOUNTS:
            return {
                ...state,
                totalUsersCount: action.userCount
            };
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.progress ? [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id != action.id)
            };
        default:
            return state;
    }
};

export const followed = (id) => {
    return {
        type: FOLLOWED_USER,
        userId: id
    };
};

export const unFollowed = (id) => {
    return {
        type: UNFOLLOWED_USER,
        userId: id
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USER,
        allUsers: users
    };
};

export const changeCurrentPage = (numberPageClick) => {
    return {
        type: SET_CURRENTPAGE,
        pageNumber: numberPageClick
    };
};

export const setTotalCounts = (userCount) => {
    return {
        type: SET_TOTALCOUNTS,
        userCount: userCount
    };
};

export const toogleIsFetching = (fetch) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: fetch
    };
};

export const followingUserProgress = (progress, id) => {
    return {
        type: FOLLOWING_PROGRESS,
        progress: progress,
        id: id
    };
};

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(changeCurrentPage(currentPage));
        let response = await userAPI.getUsers(currentPage, pageSize);
        if(response){
            dispatch(setUsers(response.items));
            dispatch(setTotalCounts(response.totalCount));
            dispatch(toogleIsFetching(false));
        }
    };
};

export const getCurrentPage = (currentPage, pageSize) => {
    return async (dispatch) => {
        getUsers(currentPage, pageSize);
        dispatch(changeCurrentPage(currentPage));
        dispatch(toogleIsFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize);
        if(response){
            dispatch(setUsers(response.items));
             dispatch(toogleIsFetching(false));
        }
    };
};

const followUnfollowFlow = async (dispatch,id,apiMethod,actionCreator) =>{
    dispatch(followingUserProgress(true, id));
    let response = await apiMethod(id);
    if(response.resultCode===0){
        dispatch(actionCreator(id));
    }
    dispatch(followingUserProgress(false, id));
};

export const unFollowedUsers = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,id,userAPI.deleteFollow.bind(userAPI),unFollowed);
    };
};

export const followedUsers = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,id,userAPI.postFollow.bind(userAPI),followed);
    };
};

export default usersReducer;