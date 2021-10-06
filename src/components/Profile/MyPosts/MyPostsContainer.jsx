import React from 'react';
import { addPostActionCreator,changesMyPostActionCreator } from "../../../Redux/profileReducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



let mapStateToProps = (state) =>{
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        uppdateNewPostText: (text) => {
            dispatch(changesMyPostActionCreator(text));
        },
        addPost: ()=>{
            dispatch(addPostActionCreator());
        }
    };
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;