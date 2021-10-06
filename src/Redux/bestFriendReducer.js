let initialState = {
    friends: [{
        id: 1,
        name: 'Alex',
        image:'https://img.icons8.com/ios/50/000000/user--v1.png'
    }, {
        id: 2,
        name: 'Dima',
        image:'https://img.icons8.com/ios/50/000000/user--v1.png'
    }]
};
const bestFriendReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'something':
            return state;
        default:
            return state;
    }
};

export default bestFriendReducer;