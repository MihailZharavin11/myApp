import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 


const Profile = ()=>{
    return(
      <main>
      <div className = {style.logo}>
      </div>
      <ProfileInfo/>
      <MyPostsContainer/>
   </main>
    );
}

export default Profile;