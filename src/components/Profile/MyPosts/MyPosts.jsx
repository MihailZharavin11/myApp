import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props)=>{
  
  let postsData = props.postsData.map( (p) => <Post message = {p.message} like={p.likes}/>);

  let onAddPost = () =>{
    props.addPost();
    //props.dispatch(addPostActionCreator());
  };
  
  let changes = (e) =>{
    let textMessage = e.target.value;
    props.uppdateNewPostText(textMessage);
    
  };
  
 
    return(
      <main className = {style.main}>
      <div className = {style.posts}>
          <h1 className = {style.article}>My Posts</h1>
          <div className = {style.wrapperInput}>
          <input className ={style.input} type="text" value ={props.newPostText} onChange = {changes}></input>
          </div>
          <div className = {style.button}>
            <button onClick = { onAddPost}>Отправить</button>
          </div>
      </div>
      {postsData}
   </main>
    );
}

export default MyPosts;