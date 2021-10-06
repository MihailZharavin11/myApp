import React from 'react';
import style from './Header.module.css';

const Header = () =>{
    return (
        <header className={style.header}>
        <div className = {style.logo}>
          <img className ={style.picture} src ='https://image.flaticon.com/icons/png/512/3884/3884465.png' alt='Logo'></img>
        </div>
       </header>
    );
}

export default Header;

