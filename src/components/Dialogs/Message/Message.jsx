import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) =>{
    return (
        <div className={style.message}>{props.mess}</div>
    );
}

export default Message;