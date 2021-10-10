import Users from './Users';
import React from 'react';
import {connect} from 'react-redux';
import {followedAC,unFollowedAc,setUsers } from '../../Redux/usersReducer';

let mapStateToProps = (state) =>{
    return {
        users:state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) =>{
    return{
        followedUsers: (id) =>{
            dispatch(followedAC(id));
        },
        unFollowedUsers: (id)=>{
            dispatch(unFollowedAc(id));
        },
        setUsers : (users) => {
            dispatch(setUsers(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;