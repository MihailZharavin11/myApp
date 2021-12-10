import Users from './Users';
import Preloader from '../Common/Preloader';
import React from 'react';
import {connect} from 'react-redux';
import {getUsers, getCurrentPage,unFollowedUsers,followedUsers } from '../../Redux/usersReducer';
import {compose} from 'redux';
import {getCurrentPageFromState, getFollowingInProgressFromState, getIsFetchingFromState, getPageSizeFromState, getTotalUsersCountFromState, getUsersFromState, getUserSuperSelector } from '../../Redux/users-selectors';

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    changePage = (p) => {
        this.props.getCurrentPage(p,this.props.pageSize);
    }

    render(){
        return (
        <>
        {this.props.isFetching?<Preloader/>:null} 
        <Users users = {this.props.users} 
                 totalUsersCount = {this.props.totalUsersCount} 
                pageSize = {this.props.pageSize} changePage = {this.changePage} 
                currentPage = {this.props.currentPage} followingInProgress = {this.props.followingInProgress}
                 unFollowedUsers = {this.props.unFollowedUsers} followedUsers = {this.props.followedUsers}/>
        </>
        );
    }
}

let mapStateToProps = (state) =>{
    return {
        users:getUsersFromState(state),
        pageSize: getPageSizeFromState(state),
        totalUsersCount:getTotalUsersCountFromState(state),
        currentPage:getCurrentPageFromState(state),
        isFetching:getIsFetchingFromState(state),
        followingInProgress:getFollowingInProgressFromState(state)
    };
};




export default compose(
    connect(mapStateToProps,
        {
            getUsers,
            getCurrentPage,
            unFollowedUsers,
            followedUsers
        })
)(UsersContainer); 