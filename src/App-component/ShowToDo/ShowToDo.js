import React from 'react';
import  style from  './ShowToDo.module.css';
import SingelToDo from './SingelToDo';



const ShowToDO = (prop)=>{
    const GetBackDataToShowOnOverLay = (singelToDoData)=>{
        console.log(singelToDoData)
    }
    return(
        <div className={style['main-show-todo']}>
            <SingelToDo content={prop} OnGetBackData={GetBackDataToShowOnOverLay}/>
        </div>
    )
}

export default ShowToDO ;


