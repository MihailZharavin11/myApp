import React from 'react';
import UserItem from './UserItem/UserItem';
import style from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';

let Users = (props) =>{
    let userItem = props.users.map (el =>
        <UserItem id ={el.id} name ={el.name} 
                followed = {el.followed} status = {el.status} 
                photos = {el.photos}     
                 followingInProgress = {props.followingInProgress} 
                 unFollowedUsers = {props.unFollowedUsers} followedUsers = {props.followedUsers}/>);
   return (
       <div className = {style.wrapper}>
           {userItem}
            <Paginator totalUsersCount={props.totalUsersCount} pageSize= {props.pageSize} 
            changePage = {props.changePage} currentPage = {props.currentPage} />
       </div>
   );
};

export default Users;