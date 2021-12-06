import React from "react";
import style from "./TextAreaForms.module.css";


export const TextForms = ({input,meta,...props}) =>{
    const errorCheking = meta.error && meta.touched;
    return (
        <div>
            <div className = {errorCheking?style.inputError:style.input}>
                <input {...input} {...props}/>
            </div>
            <div>
                {errorCheking? <span className={style.errorMessage}>{meta.error}</span>:""}
            </div>
        </div>
        
    );
};


