import React from 'react';
import { Redirect } from 'react-router';
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return{
    auth:state.auth.isAuth
    };
};

const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.auth){
                return <Redirect to='/login'/>  
            } else{
                return <Component {...this.props}/>
            }
        }
    }


    let ConnectedAuthRedirectCompronent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectCompronent;
};

export default withAuthRedirect;