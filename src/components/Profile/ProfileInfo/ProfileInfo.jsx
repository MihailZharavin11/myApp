import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className = {style.info}>
          <div className = 'info__picture' >
          <img className = {style.picture} alt="ava" src='https://lh6.googleusercontent.com/proxy/u0kqVJJi3bazlEgS_n1-mAyc02cZbG2u-xMdT-LPnLWyyvEt2fPSvVZDqzGoidfyMsml296tvOkmLgWA2BXq4PlIrHPlEyudj659uszD_ALLfP3GDZHgPh-ojUYrKPufZhOCDAirhU--i5xsTGqQmvn1qg=w1200-h630-p-k-no-nu'></img>
        </div>
        <div className = {style.description}>
            <h1 className = {style.name}>Mikhail Zharavin</h1>
            <p>Date of Birdth: 11 November</p>
            <p>City:Kharkiv</p>
            <p>Education:KHNADU</p>
        </div>
      </div>
    );
}

export default ProfileInfo;