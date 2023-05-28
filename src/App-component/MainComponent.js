import React, {useState} from 'react';
import style from './MainComponent.module.css';
import GetUserInput from './Input-component/Input-component'; 
import ShowToDO from './ShowToDo/ShowToDo';


//const addDate = ()=>{
//    console.log('run add Date function!!!')
//}


const MainComponent  = ()=>{

    const [userInputValue , stateUpdater] = useState()

    const getUserInputFromChild = (value)=>{
        console.log(value)
        stateUpdater(value)
    }
   return (
    <div className={style['main-component']}>
        <GetUserInput onGetuserValue={getUserInputFromChild} />
        <ShowToDO data={userInputValue}/>
    </div>
  
   )
}

export default MainComponent;