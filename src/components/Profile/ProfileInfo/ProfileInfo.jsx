import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusHoocks from './ProfileStatus/ProfileStatusHoocks';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  
 
    return (
      <div className = {style.info}>
        <div className = {style.description}>
            <img className={style.picture} alt='ava' src={props.profile.photos.large}></img>
            <h1 className = {style.name}>{props.profile.fullName}</h1>
            <div className = {style.status}>
              <ProfileStatusHoocks id = {props.profile.userId} status = {props.status} getUserStatus ={props.getUserStatus} 
                            updateUserStatus = {props.updateUserStatus}/>
            </div>
            <p>О себе:{props.profile.aboutMe} </p>
            <p>Контакты:{Object.keys(props.profile.contacts).map((oneKey,i)=>{
              return (
                props.profile.contacts[oneKey]?
                <li style={{display:'block'}} key={i}>
                  {oneKey+':'} <a href={props.profile.contacts[oneKey]}>{props.profile.contacts[oneKey]}</a>
                  </li>:null
                );
            })} 
            </p>
            <p>В поиске работы:{props.profile.lookingForAJob?'В поиске':'Работаю'}</p>
            <p>Статус поиска:{props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    );
}

export default ProfileInfo;