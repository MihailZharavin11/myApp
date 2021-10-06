import Dialog from './Dialog';
import { changesDialogActionCreator,addMessageActionCreator } from '../../Redux/dialogsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        userData : state.dialogsPage.userData,
        messagesData: state.dialogsPage.messagesData,
        newDialogsText: state.dialogsPage.newDialogsText
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {
        changesDialogText: (text)=> {
            dispatch(changesDialogActionCreator(text));
        },
        addDialogText: ()=>{
            dispatch(addMessageActionCreator());
        }
    };
};

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog);



export default DialogContainer;