import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
};

const authReducer = (state = initialState , action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default: 
            return state;
    }
};

export const setUserData = (userId,email,login,isAuth) =>{
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    };
};





export const authUsers = () =>{
    return (dispatch) =>{
       return authAPI.setUserAuth().then(data =>{
            if(data.resultCode===0){
                dispatch(setUserData(data.data.id,data.data.email,data.data.login,true));
            }
        });
    };
};

export const loginUser = (email,password,rememberMe=false) =>{
    return (dispatch) =>{
        authAPI.loginUser(email,password,rememberMe).then(data =>{
            if(data.resultCode === 0){
                dispatch(authUsers());
            }else{
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit('login',{
                    _error:errorMessage
                }));
            }
        });
    };
};

export const logOutUser = () =>{
    return (dispatch) =>{
        authAPI.logOutUser().then( response =>{
            if(response.data.resultCode ===0){
                dispatch(setUserData(null,null,null,false));
            }
        });
    };
};

export default authReducer;