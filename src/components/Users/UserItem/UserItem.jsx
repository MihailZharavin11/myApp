import React from 'react';
import style from './../Users.module.css';

const UserItem = (props) => {


    return (
        <div className={style.userWrapper}>
            <div className = {style.pictureButton}>
                <div className= {style.picture}>
                    <img src={props.image} alt="ava" />
                </div>
                <div className={style.button}>
                    {props.followed?
                    <button className={style.unFoll} onClick={()=>{props.unFollowedUsers(props.id);}}>Unfollowed</button>:
                    <button className={style.foll} onClick={()=>{props.followedUsers(props.id);}}>Followed</button>}
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
                <div className = {style.countryCity}>
                    <div className={style.country}>
                        {props.country}
                    </div>
                    <div className ={style.city}>
                        {props.city}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserItem;