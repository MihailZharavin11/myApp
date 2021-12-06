import React from 'react';
import style from './../Users.module.css';
import userPhoto from '../../../assets/img/userPhoto.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../../API/api';

const UserItem = (props) => {
    return (
        <div className={style.userWrapper}>
            <div className = {style.pictureButton}>
                <div className= {style.picture}>
                    <NavLink to = {'profile/'+ props.id}>
                        <img className ={style.pictureUsers} src={props.photos.small != null ? props.photos.small : userPhoto } alt="ava" />
                    </NavLink>
                </div>
                <div className={style.button}>
                    {props.followed?
                    <button disabled = {props.followingInProgress.some(id => id === props.id)} 
                            className={style.unFoll} onClick={()=>{
                                props.unFollowedUsers(props.id);
                             }
                    }>Unfollowed</button>:
                    <button disabled = {props.followingInProgress.some(id=>id===props.id)} 
                    className={style.foll} onClick={()=>{
                        props.followedUsers(props.id);
                    }}>Followed</button>}
                </div>
            </div>
            <div className = {style.description}>
                <div className = {style.nameStatus}>
                    <div className = {style.name}>
                        {props.name}
                    </div>
                    <div className ={style.status}>
                        {props.status}
                    </div>
                </div>
                {/* <div className = {style.countryCity}>
                    <div className={style.country}>
                        {props.country}
                    </div>
                    <div className ={style.city}>
                        {props.city}
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default UserItem;