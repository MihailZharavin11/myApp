import React from 'react';
import style from './Post.module.css';

const Post = (props)=>{
    return(
      <div className = {style.post}>
        <div className = {style.item}>
         <div className = {style.picture}>
         </div> 
         <div className = {style.message}>
         <p>{props.message}</p>
         <div>{props.like}</div>
          </div>
        </div>
      </div>
    );
}

export default Post;