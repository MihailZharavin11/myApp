import FriendsItem from "./FriendsItem/FriendsItem";
import style from './Friends.module.css';

const Friends = (props) =>{
    let friendsList = props.stateFriends.map((el) => <FriendsItem key ={el.id} name= {el.name} image = {el.image} id= {el.id} />);
    return (
        <div className = {style.friends_block}>
            <h1 className = {style.title_friends}>Friends</h1>
            <div className = {style.name_list}>
            {friendsList}
            </div>
        </div>
    );
}

export default Friends;