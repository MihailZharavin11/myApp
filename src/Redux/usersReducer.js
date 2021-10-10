const FOLLOWED_USER = 'FOLLOWED_USER';
const UNFOLLOWED_USER = "UNFOLLOWED_USER";
const SET_USER = "SET_USER";

let initialState = {
    users: [
       
    ] 
};

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOWED_USER:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed:true};
                    }
                    return u;
                }),
            };
        case UNFOLLOWED_USER:
            return {
                ...state,
                users: state.users.map(u =>{
                    if(u.id ===action.userId){
                        return {...u,followed:false};
                    }
                    return u;
                })
            };
        case SET_USER:
            return {
                ...state,
                 users: [...state.users, ...action.allUsers]
            };
        
        default: return state;
    }
};

export const followedAC = (id) =>{
    return{
        type: FOLLOWED_USER,
        userId: id
    };
};

export const unFollowedAc = (id) =>{
    return{
        type:UNFOLLOWED_USER,
        userId:id
    };
};

export const setUsers = (users) => {
    return{
        type:SET_USER,
        allUsers: users
    };
};

export default usersReducer;