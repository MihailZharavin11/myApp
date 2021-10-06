const ADD_POST_ELEMENT = 'ADD-POST-ELEMENT';
const UPPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [{
        id: 1,
        message: 'Hi, how are u?',
        likes: 20
    }, {
        id: 2,
        message: "It's my first post",
        likes: 30
    }],
    newPostText: ''
};

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST_ELEMENT:
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData,{id:5,message:state.newPostText,likes:0}]
            };
        case UPPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () =>{
    return {
      type: ADD_POST_ELEMENT
    };
  };
  
export const changesMyPostActionCreator = (textMessage) =>{
    return {
      type: UPPDATE_NEW_POST_TEXT,
      text: textMessage
    };
  };

export default profileReducer;