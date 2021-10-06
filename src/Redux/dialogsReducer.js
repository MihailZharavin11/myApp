const UPPDATE_NEW_DIALOG_TEXT = 'UPPDATE-NEW-DIALOG-TEXT';
 const MESSAGE_CREATE = 'MESSAGE-CREATE';

 let initialState = {
    userData: [{
        id: 1,
        name: 'Alex',
        image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
    }, {
        id: 2,
        name: 'Dima',
        image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
    }, {
        id: 3,
        name: 'Olga',
        image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
    }, {
        id: 4,
        name: 'Nick',
        image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
    }],
    messagesData: [{
        id: 1,
        message: 'Hello'
    }, {
        id: 2,
        message: 'Hi'
    }, {
        id: 3,
        message: 'Whats up!'
    }, {
        id: 4,
        message: 'Hey!'
    }],
    newDialogsText: ''
};
const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPPDATE_NEW_DIALOG_TEXT:
           return {
                ...state,
                newDialogsText: action.text
            };
        case MESSAGE_CREATE: 
            return {
                ...state,
                newDialogsText: '',
                messagesData: [...state.messagesData,{id:5,message:state.newDialogsText}]
            };
        default: return state;
    }
};

export const changesDialogActionCreator = (textChanges) => {
    return {
        type:UPPDATE_NEW_DIALOG_TEXT,
        text: textChanges
    };
};

export const addMessageActionCreator = () =>{
    return {
        type:MESSAGE_CREATE
    };
};

export default dialogsReducer;