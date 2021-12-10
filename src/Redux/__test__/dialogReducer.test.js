import dialogsReducer, { addMessage, changeMessage } from "../dialogsReducer";

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


test('message should be change', () => {
    let action = changeMessage(2,'hello');
    let newState = dialogsReducer(initialState,action);

    expect(newState.messagesData[1].message).toBe('hello');
  });

  test('message shold be incriment after added', ()=>{
    let action = addMessage('Privet');
    let newState = dialogsReducer(initialState,action);

    expect(newState.messagesData.length).toBe(5);
  });