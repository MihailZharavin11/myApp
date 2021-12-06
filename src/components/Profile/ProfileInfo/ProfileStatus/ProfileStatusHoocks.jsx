import React ,{useEffect, useState} from 'react';

const ProfileStatusHoocks = (props) =>{
   const [editMode,setEditMode] = useState(false);
   const [status,setStatus] = useState(props.status);

   useEffect(()=>{
    setStatus(props.status);
   },[props.status]);

   const activatedEditMode = () =>{
        setEditMode(true);
   };

   const deActivatedEditMode = () =>{
    setEditMode(false);
    props.updateUserStatus(status);
   };

   const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
   };

    return (
        <div>
        {
            editMode?
        <div><input onChange= {onStatusChange} autoFocus ={true} onBlur = {deActivatedEditMode} type="text" value={status } /></div>:
        <div onDoubleClick = {activatedEditMode}> {props.status||'----'}</div>
        }
    </div>
    )
};

export default ProfileStatusHoocks;