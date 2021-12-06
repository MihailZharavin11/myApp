import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../../Utils/Validators/validators";
import { TextForms } from "../../../Common/FormControls/TextAreaForms";
import style from '../MyPosts.module.css';

let createLengthValidator = maxLengthCreator(10);

const MyPostsInput = (props) =>{
    return(
        <form onSubmit = {props.handleSubmit}>
            <div className = {style.wrapperInput}>
                <Field className = {style.input} name = 'message' component = {TextForms} validate = {[requiredField,createLengthValidator]} />
            </div>
            <div className = {style.button}>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPostsInputReduxForm = reduxForm({
    form:'posts'
})(MyPostsInput);

export default MyPostsInputReduxForm;