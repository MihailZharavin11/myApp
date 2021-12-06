import React from 'react';
import loader from '../../assets/img/loader.gif';

const Preloader = (props) =>{
    return (
        <img width = '50' height = '50' alt = 'loader' src = {loader}/>
    );
};

export default Preloader;