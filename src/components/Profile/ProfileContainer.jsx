import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {showUser} from "../../Redux/profileReducer";
import { getUserStatus,updateUserStatus } from "../../Redux/profileReducer";
//import { withRouter } from "react-router";
import {compose} from 'redux';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const ProfileContainer = (props) =>{

    let params = useParams();
    let navigate = useNavigate();
    let userId = params.userId;
    useEffect(()=>{
        if(!userId){
            userId = props.userId;
            if(!userId){
                navigate('/login');
            }
        }
        props.showUser(userId);
        props.getUserStatus(userId);
    },[props.userId]);


    return(
        <Profile {...props}/>
    );

    // render(){
    //     return (
    //         <Profile {...this.props} />
    //     );
    // }

};

let mapStateToProps = (state) =>{
    return {
       profile:state.profilePage.profile,
       status:state.profilePage.status,
       userId:state.auth.userId,
       isAuth:state.auth.isAuth
    };
};

   

export default compose(
    connect(mapStateToProps,{showUser,getUserStatus,updateUserStatus})
    )(ProfileContainer);
