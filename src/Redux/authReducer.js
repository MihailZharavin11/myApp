import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";


const SET_USER_DATA = 'auth/SET_USER_DATA';

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
    return async (dispatch) =>{
        let response = await authAPI.setUserAuth();
            if(response.resultCode===0){
                dispatch(setUserData(response.data.id,response.data.email,response.data.login,true));
            }
    };
};

export const loginUser = (email,password,rememberMe=false) =>{
    return async (dispatch) =>{
        let response = await authAPI.loginUser(email,password,rememberMe);
        if(response.resultCode === 0){
            dispatch(authUsers());
        }else{
            let errorMessage = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit('login',{
                _error:errorMessage
            }));
        }
    };
};

export const logOutUser = () =>{
    return async (dispatch) =>{
        let response = await authAPI.logOutUser();
        if(response.data.resultCode ===0){
            dispatch(setUserData(null,null,null,false));
        }
    };
};

export default authReducer;