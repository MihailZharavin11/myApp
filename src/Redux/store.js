//  import dialogsReducer from './dialogsReducer';
//  import profileReducer from './profileReducer';
//  import newsReducer from './newsPageReducer';
//  import bestFriendReducer from './bestFriendReducer';
// const ADD_POST_ELEMENT = 'ADD-POST-ELEMENT';
// const UPPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';

// const UPPDATE_NEW_DIALOG_TEXT = 'UPPDATE-NEW-DIALOG-TEXT';
// const MESSAGE_CREATE = 'MESSAGE-CREATE';

// const UPPDATE_NEW_NEWS_TEXT = 'UPPDATE-NEW-NEWS-TEXT';
//  const ADD_NEWS = 'ADD-NEWS';


// let store = {
//     _state: {
//         profilePage: {
//             postsData: [{
//                 id: 1,
//                 message: 'Hi, how are u?',
//                 likes: 20
//             }, {
//                 id: 2,
//                 message: "It's my first post",
//                 likes: 30
//             }],
//             newPostText: ''
//         },
//         dialogsPage: {
//             userData: [{
//                 id: 1,
//                 name: 'Alex',
//                 image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }, {
//                 id: 2,
//                 name: 'Dima',
//                 image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }, {
//                 id: 3,
//                 name: 'Olga',
//                 image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }, {
//                 id: 4,
//                 name: 'Nick',
//                 image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }],
//             messagesData: [{
//                 id: 1,
//                 message: 'Hello'
//             }, {
//                 id: 2,
//                 message: 'Hi'
//             }, {
//                 id: 3,
//                 message: 'Whats up!'
//             }, {
//                 id: 4,
//                 message: 'Hey!'
//             }],
//             newDialogsText: ''
//         },
//         bestFriends: {
//             friends: [{
//                 id: 1,
//                 name: 'Alex',
//                 image:'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }, {
//                 id: 2,
//                 name: 'Dima',
//                 image:'https://img.icons8.com/ios/50/000000/user--v1.png'
//             }]
//         },
//         newsPage:{
//             news: [
//             {
//                 id:1,
//                 news:'First news'
//             },
//             {
//                 id:2,
//                 news:'2 news'
//             },
//             {
//                 id:3,
//                 news:'3 news'
//             }
//             ],
//             newNewsText: ''
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },
//     subscribe(observ) {
//         this._callSubscriber = observ;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage,action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
//         this._state.bestFriends = bestFriendReducer(this._state.bestFriends,action);
//         this._state.newsPage = newsReducer(this._state.newsPage,action);
//         this._callSubscriber(this._state);
//         // if(action.type === UPPDATE_NEW_DIALOG_TEXT){
//         //     this._state.dialogsPage.newDialogsText = action.text;
//         //     this._callSubscriber(this._state);
//         // }else if(action.type===MESSAGE_CREATE){
//         //     let mess = {
//         //         id:5,
//         //         message: this._state.dialogsPage.newDialogsText
//         //     };
//         //     this._state.dialogsPage.messagesData.push(mess);
//         //     this._state.dialogsPage.newDialogsText = '';
//         //     this._callSubscriber(this._state);
//         // }else if(action.type===ADD_POST_ELEMENT){
//         //     let post = {
//         //         id: 5,
//         //         message: this._state.profilePage.newPostText,
//         //         likes: 0
//         //     };
//         //     this._state.profilePage.postsData.push(post);
//         //     this._state.profilePage.newPostText = '';
//         //     this._callSubscriber(this._state);
//         // }else if(action.type===UPPDATE_NEW_POST_TEXT){
//         //     this._state.profilePage.newPostText = action.text;
//         //     this._callSubscriber(this._state);
//         // }else if(action.type === ADD_NEWS){
//         //     let news = {
//         //         id:4,
//         //         news:this._state.newsPage.newNewsText
//         //     };
//         //     this._state.newsPage.news.push(news);
//         //     this._state.newsPage.newNewsText = '';
//         //     this._callSubscriber(this._state);
//         // }else if(action.type === UPPDATE_NEW_NEWS_TEXT){
//         //     this._state.newsPage.newNewsText = action.text;
//         //     this._callSubscriber(this._state);
//         // }
//     }
// };

// export const addPostActionCreator = () =>{
//     return {
//       type: ADD_POST_ELEMENT
//     };
//   };
  
// export const changesMyPostActionCreator = (textMessage) =>{
//     return {
//       type: UPPDATE_NEW_POST_TEXT,
//       text: textMessage
//     };
//   };

//   export const changesDialogActionCreator = (textChanges) => {
//     return {
//         type:UPPDATE_NEW_DIALOG_TEXT,
//         text: textChanges
//     };
// };

// export const addMessageActionCreator = () =>{
//     return {
//         type:MESSAGE_CREATE
//     };
// };

// export const changesNewsTextActionCreator = (textChanges)=>{
//     return {
//         type: UPPDATE_NEW_NEWS_TEXT,
//         text: textChanges
//     };
// };

// export const addNewNewsActionCreator= ()=>{
//     return {
//         type: ADD_NEWS
//     };
// };


// export default store;