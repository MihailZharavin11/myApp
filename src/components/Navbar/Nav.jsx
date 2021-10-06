import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import FriendsContainer from './Friends/FriendsContainer';
import style from './Nav.module.css';

const Nav = (props) =>{
    return (
        <nav className = {style.nav}>
          <ul className={style.list}>
            <li className={style.item}><NavLink activeClassName = {style.active} className ={`${style.link} ${style.active}`} to="/Profile"> Profile</NavLink></li>
            <li className={style.item}><NavLink className = {`${style.link} ${style.active}`} to="/Dialogs"> Messages</NavLink></li>
            <li className={style.item}><NavLink className = {`${style.link} ${style.active}`} to="/News"> News</NavLink></li>
            <li className={style.item}><NavLink className = {`${style.link} ${style.active}`} to="/Music"> Music</NavLink></li>
            <li className={style.item}><NavLink className = {`${style.link} ${style.active}`} to="/Users">Find Users</NavLink></li>
            <li className={`${style.item} ${style.itemLast}`}><NavLink activeClassName={style.active} className = {style.link} to="/Settings"> Settings</NavLink></li>
          </ul>
          <FriendsContainer store ={props.store}/>
       </nav>
    );
}

export default Nav;