import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return (
    <div className ={`${style.user} ${style.active}`}>
            <NavLink className={style.navigation} to={path}>
                <div className = {style.user_imageWrapper} ><img className={style.user_image} src ={props.image} alt='user_image'></img></div>
                <div className = {style.user_name}>{props.name}</div>
            </NavLink>
    </div>
    );
}

export default DialogItem;