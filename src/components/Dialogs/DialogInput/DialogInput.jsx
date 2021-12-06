import React from "react";
import { Field, reduxForm } from "redux-form";
import style from '../Dialogs.module.css';
import {TextForms} from '../../Common/FormControls/TextAreaForms';
import {maxLengthCreator,requiredField} from '../../../Utils/Validators/validators';


let createLengthValidator = maxLengthCreator(10);

const DialogInput = (props)=>{
    return (
            <form onSubmit = {props.handleSubmit}>
                <div className = {style.dialogsInput}>
                    <Field className = {style.input} name = 'message' validate = {[createLengthValidator,requiredField]} component ={TextForms}/>
                </div>
                <div className = {style.buttonElement}>
                    <button>Add Message</button>
                </div>
            </form>
    )
};

const DialogInputReduxForm = reduxForm({
    form: 'dialog'
})(DialogInput);

export default DialogInputReduxForm;