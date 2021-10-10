import React from 'react';
import UserItem from './UserItem/UserItem';
import style from './Users.module.css';

const Users = (props)=>{
    if(props.users.length===0){
        props.setUsers([
            {
                id: 1,
                followed:true,
                name: `Bogdan`,
                status: `Like MJ`,
                image: 'https://img.icons8.com/ios/50/000000/user--v1.png',
                location: {
                    country: `Ukraine`,
                    city : `Kharkiv`
                }
            },
            {
                id: 2,
                followed:false,
                name: `Anna`,
                status: `I love this world`,
                image: 'https://img.icons8.com/ios/50/000000/user--v1.png',
                location: {
                    country: `USA`,
                    city : `New York`
                }
            },
            {
                id: 3,
                followed:true,
                name: `Steff`,
                status: `I'm computer mind`,
                image: 'https://img.icons8.com/ios/50/000000/user--v1.png',
                location: {
                    country: `Germany`,
                    city : `Berlin`
                }
            },
            {
                id: 4,
                followed:false,
                name: `Stepan`,
                status: `Why not?`,
                image: 'https://img.icons8.com/ios/50/000000/user--v1.png',
                location: {
                    country: `Russia`,
                    city : `Moscow`
                }
            }
        ]);
    }

    let userItem = props.users.map (el =><UserItem id ={el.id} name ={el.name} followed = {el.followed}
         status = {el.status} country = {el.location.country} city = {el.location.city} image = {el.image}
         followedUsers = {props.followedUsers} unFollowedUsers = {props.unFollowedUsers} />);
    return (
        <div className = {style.wrapper}>
            {userItem}
        </div>
    );
};

export default Users;

