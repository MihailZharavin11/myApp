import React from 'react';
import UserItem from './UserItem/UserItem';
import style from './Users.module.css';

let Users = (props) =>{
    let userItem = props.users.map (el =>
        <UserItem id ={el.id} name ={el.name} 
                followed = {el.followed} status = {el.status} 
                photos = {el.photos}     
                 followingInProgress = {props.followingInProgress} 
                 unFollowedUsers = {props.unFollowedUsers} followedUsers = {props.followedUsers}/>);
        let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
   return (
       <div className = {style.wrapper}>
           {userItem}
           {pages.map(p => {
               return <span onClick={(e) =>{props.changePage(p)}} className= {props.currentPage === p && style.selectedPage}>{p}</span>
           })}
       </div>
   );
};

export default Users;