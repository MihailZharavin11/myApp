import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {showUser} from "../../Redux/profileReducer";
import { getUserStatus,updateUserStatus } from "../../Redux/profileReducer";
import { withRouter } from "react-router";
import {compose} from 'redux';
import withAuthRedirect from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.userId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserStatus(userId);
        this.props.showUser(userId);
    }

    

    render(){
        return (
            <Profile {...this.props} />
        );
    }

}

let mapStateToProps = (state) =>{
    return {
       profile:state.profilePage.profile,
       status:state.profilePage.status,
       userId:state.auth.userId,
       isAuth:state.auth.isAuth
    };
};

   

export default compose(
    withRouter,
    connect(mapStateToProps,{showUser,getUserStatus,updateUserStatus})
    )(ProfileContainer);
