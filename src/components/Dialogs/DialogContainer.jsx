import Dialog from './Dialog';
import {addMessage } from '../../Redux/dialogsReducer';
import {connect} from 'react-redux';
// import withAuthRedirect from '../HOC/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) =>{
    return {
        userData : state.dialogsPage.userData,
        messagesData: state.dialogsPage.messagesData,
        newDialogsText: state.dialogsPage.newDialogsText
    };
};


export default compose(
    // withAuthRedirect,
    connect(mapStateToProps,
        {
            addMessage
        }
        )
    )(Dialog);