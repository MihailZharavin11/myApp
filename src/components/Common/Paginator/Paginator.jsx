import React from 'react';
import style from './Paginator.module.css';

let Paginator = (props) =>{
        let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
   return (
       <div className = {style.wrapper}>
           {pages.map(p => {
               return <span onClick={(e) =>{props.changePage(p)}} className= {props.currentPage === p && style.selectedPage}>{p}</span>
           })}
       </div>
   );
};

export default Paginator;