

export const getUsersFromState = (state)=>{
    return state.usersPage.users;
};

export const getPageSizeFromState = (state)=>{
    return state.usersPage.pageSize;
};

export const getTotalUsersCountFromState = (state) =>{
    return state.usersPage.totalUsersCount;
};

export const getCurrentPageFromState = (state) =>{
    return state.usersPage.currentPage;
};

export const getIsFetchingFromState = (state) =>{
    return state.usersPage.isFetching;
};

export const getFollowingInProgressFromState = (state) =>{
    return state.usersPage.followingInProgress;
};



