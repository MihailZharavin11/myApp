import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 


let Profile = (props) => {
    return(
      <main>
        <ProfileInfo profile = {props.profile} status = {props.status} 
        getUserStatus ={props.getUserStatus} 
         updateUserStatus = {props.updateUserStatus} />
        <MyPostsContainer/>
      </main>
    ); 
}

export default Profile;