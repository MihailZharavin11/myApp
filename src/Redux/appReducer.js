import { authUsers } from "./authReducer";

const SET_INICIALIZATION = 'appReducer/SET_INICIALIZATION';

const initialState = {
    initialization : false
};

const appReducer = (state = initialState,action) =>{
    switch(action.type){
        case SET_INICIALIZATION:
            return {
              ...state,
              initialization:true  
            };
        default: 
            return state;
    }
};

export const inicializationSuccess = () =>{
    return {
        type:SET_INICIALIZATION
    };
};

export const inizializeApp = () =>{
    return async (dispatch) =>{
        dispatch(authUsers()).then( () =>{
            dispatch(inicializationSuccess());
        });
    };
};

export default appReducer;