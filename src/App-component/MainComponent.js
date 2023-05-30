import React, {useState} from 'react';
import style from './MainComponent.module.css';
import GetUserInput from './Input-component/Input-component'; 
import ShowToDOBox from './ShowToDo/ShowToDoBox';


//const addDate = ()=>{
//    console.log('run add Date function!!!')
//}


const MainComponent  = ()=>{

   useState()
   
   return (
    <div className={style['main-component']}>
        <GetUserInput />
        <ShowToDOBox />
    </div>
  
   )
}

export default MainComponent;