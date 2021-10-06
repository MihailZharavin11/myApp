import style from './FriendsItem.module.css';
import { NavLink } from 'react-router-dom';

const FriendsItem = (props) =>{
    let path ='/dialogs/' + props.id;
    return (
        <NavLink className ={style.friends__item} to={path}>
            <div className={style.user_imageWrapper}>
                <img className={style.image_users} src={props.image} alt="users_image" />
            </div>
            <div className = {style.name}>
                {props.name}
            </div>
        </NavLink>
    );
}

export default FriendsItem;