import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logOutUser} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{

    

    render(){
        return(
            <Header {...this.props} />
        );
    }

}

let mapStateToProps = (state) =>{
    return {
       auth:state.auth.isAuth?state.auth.login:null ,
       userId:state.auth.userId
    };
};




export default connect (mapStateToProps,
    {
        logOutUser
}
)(HeaderContainer);