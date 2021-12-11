import React from 'react';

class ProfileStatus extends React.Component{

    state = {
        editMode:false,
        status:this.props.status
    };

    activatedEditMode = () =>{
        this.setState({
            editMode:true
        });
    };

    deActivatedEditMode= (e)=>{
        this.setState({
            editMode:false
        });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate = (prevProps,prevState) =>{
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    };
    


    render(){
        debugger;
        return (
            <div>
                {
                this.state.editMode?
                <div><input onChange= {this.onStatusChange} autoFocus ={true} onBlur = {this.deActivatedEditMode} type="text" value={this.state.status} /></div>:
                <span className ='status' onDoubleClick = {this.activatedEditMode}> {this.props.status||'----'}</span>
                }
            </div>
        );
    }
}

export default ProfileStatus;