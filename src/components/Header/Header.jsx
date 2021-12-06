import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) =>{
    return (
        <header className={style.header}>
        <div className = {style.logo}>
          <img className ={style.picture} src ='https://image.flaticon.com/icons/png/512/3884/3884465.png' alt='Logo'></img>
        </div>
        <div className = {style.logIn}>
          {props.auth?
          <div className = {style.authBlock}>
            <div className={style.userName}>{props.auth}</div>
            <div><button onClick ={props.logOutUser} className = {style.butonLogOut}>LogOut</button></div>
          </div>
          :
          <NavLink to='/login'>LogIn</NavLink>}
        </div>
       </header>
    );
}

export default Header;

