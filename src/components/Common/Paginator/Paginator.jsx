import React, { useEffect, useState } from 'react';
import style from './Paginator.module.css';

let Paginator = ({currentPage,changePage,totalUsersCount,pageSize, portionSize = 10}) =>{
        let pageCount = Math.ceil(totalUsersCount/pageSize);
        let pages = [];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
        let portionCount = Math.ceil(pageCount/portionSize);
        let [portionNumber,setPortionNumber] = useState(1);
        useEffect(()=>{
            setPortionNumber(Math.ceil(currentPage/portionSize));
            debugger; 
        },[currentPage]);
        let leftPortionPageNumber = (portionNumber-1) * portionSize +1;
        let rightPortionPageNumber = portionNumber * portionSize;
       return(
        <div className={style.wrapper}>
            {
                portionNumber>1&&<button onClick={()=>{
                    setPortionNumber(portionNumber - 1);
                }}>previous</button>
            }


            {
                pages.filter((p) =>{
                    return p>=leftPortionPageNumber && p<=rightPortionPageNumber
                }).map((e)=>{
                    return <span onClick={()=>{
                        changePage(e);
                    }} className={`${currentPage === e &&style.selectedPage} ${style.pages}`}>{e}</span>
                })
            }


            {
                portionCount>portionNumber &&
                <button onClick={()=>{
                    setPortionNumber(portionNumber+1);
                 }}>next</button>
            }
        </div>
       );
};

export default Paginator;



//    <div className = {style.wrapper}>
    //        {pages.map(p => {
    //            return <span onClick={(e) =>{props.changePage(p)}} className= {props.currentPage === p && style.selectedPage}>{p}</span>
    //        })}
    //    </div>