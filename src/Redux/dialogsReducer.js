
 const MESSAGE_CREATE = 'dialogsPage/MESSAGE-CREATE';
 const CHANGE_MESSAGE = 'dialogsPage/CHANGE_MESSAGE';

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
    }]
};
const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case MESSAGE_CREATE: 
            return {
                ...state,
                messagesData: [...state.messagesData,{id:5,message:action.message}]
            };
        case CHANGE_MESSAGE:
            return{
                ...state,
                messagesData: state.messagesData.filter((element) => {
                    if(element.id == action.id){
                       return element.message = action.message;
                    }
                    return element;
                })
            };
        default: return state;
    }
};


export const addMessage = (message) =>{
    return {
        type:MESSAGE_CREATE,
        message
    };
};

export const changeMessage=(id,message) =>{
    return{
        type:CHANGE_MESSAGE,
        id,
        message
    };
};

export default dialogsReducer;