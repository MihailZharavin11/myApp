import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogInputReduxForm from './DialogInput/DialogInput';




const Dialog = (props) =>{
    let usersElement = props.userData.map((el) => <DialogItem key = {el.id} image ={el.image} id={el.id} name = {el.name}/>);
    let messageElement = props.messagesData.map((el) => <Message key ={el.id} mess ={el.message}/>);

    let onSubmit = (formData) =>{
        props.addMessage(formData.message);
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
            <DialogInputReduxForm onSubmit = {onSubmit}/>
        </div>
    );
}

export default Dialog;