import React from 'react';
import { addPost} from "../../../Redux/profileReducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import { compose } from 'redux';



let mapStateToProps = (state) =>{
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

export default compose(
    connect(mapStateToProps,
        {
        addPost
        }
    )
)(MyPosts);