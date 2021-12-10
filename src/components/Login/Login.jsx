import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from "react-redux";
import {compose} from 'redux';
import {loginUser} from '../../Redux/authReducer';
import { TextForms } from '../Common/FormControls/TextAreaForms';
import {requiredField,maxLengthCreator} from '../../Utils/Validators/validators';
import { Redirect } from 'react-router';
import style from '../Common/FormControls/TextAreaForms.module.css';

const lengthValidate = maxLengthCreator(40);

let LoginForm = ({handleSubmit,error}) =>{
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name='login' validate={[requiredField,lengthValidate]} component={TextForms}/>
                </div>
                <div>
                    <Field placeholder = {'password'} name='password' type='password' validate={[requiredField,lengthValidate]} component={TextForms}/>
                </div>
                <div>
                    <Field type = {'checkbox'} name='rememberMe' component={TextForms}/> remember me
                </div>
                <div>
                    <button>LogIn</button>
                </div>
                <div className = {style.incorrectErrorMessage}>
                    {error ? error:null}
                </div>
            </form>
    )
};


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);



let Login = ({loginUser,isAuth}) =>{
    
    const onSubmit = (formData) =>{
        loginUser(formData.login,formData.password,formData.rememberMe);
    };

    if(isAuth){
        return <Redirect to='/profile'/>
    }

    return (
    <div>
        <div className='titleLogin'>
            <h1>Login</h1>
        </div>
        <LoginReduxForm onSubmit= {onSubmit} />
    </div>
    )
};

let mapStateToProps = (state) =>{
    return{
        isAuth:state.auth.isAuth
    };
};

export default compose (
connect(mapStateToProps,{loginUser})
)(Login);