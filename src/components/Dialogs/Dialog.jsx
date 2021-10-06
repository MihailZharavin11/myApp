import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialog = (props) =>{
    let usersElement = props.userData.map((el) => <DialogItem key = {el.id} image ={el.image} id={el.id} name = {el.name}/>);
    let messageElement = props.messagesData.map((el) => <Message key ={el.id} mess ={el.message}/>);

    let changes = (e) =>{
       let textChanges = e.target.value;
       props.changesDialogText(textChanges);
    };

    let addMessage =() =>{
        props.addDialogText();
    };

    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsTitle}>
                <h1 className = {style.title}>Dialogs</h1>
            </div>
            <div className={style.dialogsPanel}>
                <div className = {style.users}>
                        {usersElement}
                </div>
                <div className={style.messages}>
                        {messageElement}
                </div>
            </div>
            <div className = {style.dialogsInput}>
            <input className = {style.input} type="text" value ={props.newDialogsText} onChange = { changes}></input>
            </div>
            <div className = {style.buttonElement}>
                <button onClick ={addMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialog;