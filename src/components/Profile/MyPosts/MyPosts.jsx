import React from 'react';
import style from './MyPosts.module.css';
import MyPostsInputReduxForm from './MyPostsInput/MyPostsInput';
import Post from './Post/Post';


let MyPosts = (props) => {
  let onSubmit = (formData) =>{
    props.addPost(formData.message);
  };

  let postsData = props.postsData.map( (p) =><Post message = {p.message} 
    like={p.likes}/>);
    return (
    <main className = {style.main}>
      <div className = {style.posts}>
          <h1 className = {style.article}>My Posts</h1>
          <MyPostsInputReduxForm onSubmit = {onSubmit}/>
      </div>
      {postsData}
   </main>
    );
};

export default MyPosts;