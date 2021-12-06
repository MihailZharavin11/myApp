import React from 'react';
import style from './MyPosts.module.css';
import MyPostsInputReduxForm from './MyPostsInput/MyPostsInput';
import Post from './Post/Post';



const MyPosts = (props)=>{
  
  let postsData = props.postsData.map( (p) => <Post message = {p.message} like={p.likes}/>);

  
  let onSubmit = (formData) =>{
    debugger;
    props.addPost(formData.message);
  };
  
 
    return(
      <main className = {style.main}>
      <div className = {style.posts}>
          <h1 className = {style.article}>My Posts</h1>
          <MyPostsInputReduxForm onSubmit = {onSubmit}/>
      </div>
      {postsData}
   </main>
    );
}

export default MyPosts;