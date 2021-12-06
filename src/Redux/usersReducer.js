import {
    userAPI
} from "../API/api";

const FOLLOWED_USER = 'FOLLOWED_USER';
const UNFOLLOWED_USER = "UNFOLLOWED_USER";
const SET_USER = "SET_USER";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";
const SET_TOTALCOUNTS = "SET_TOTALCOUNTS";
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        };
                    }
                    return u;
                }),
            };
        case UNFOLLOWED_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        };
                    }
                    return u;
                })
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
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(changeCurrentPage(currentPage));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCounts(data.totalCount));
            dispatch(toogleIsFetching(false));
        });
    };
};

export const getCurrentPage = (currentPage, pageSize) => {
    return (dispatch) => {
        getUsers(currentPage, pageSize);
        dispatch(changeCurrentPage(currentPage));
        dispatch(toogleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(toogleIsFetching(false));
        });
    };
};

export const unFollowedUsers = (id) => {
    return (dispatch) => {
        dispatch(followingUserProgress(true, id));
        userAPI.deleteFollow(id).then(response => {
            dispatch(unFollowed(id));
            dispatch(followingUserProgress(false, id));
        });
    };
};

export const followedUsers = (id) => {
    return (dispatch) => {
        dispatch(followingUserProgress(true, id));
        userAPI.postFollow(id).then(response => {
            dispatch(followed(id));
            dispatch(followingUserProgress(false, id));
        });
    };
};

export default usersReducer;