   
import React , { useRef, useState } from 'react';
import style from  './Input-component.module.css';



const GetUserInput = ()=>{
    const [inputPlaseHolderState , inputPlaseHolderUpDater] = useState('')
    const inputFildRefrence = useRef()
    console.log(inputFildRefrence.current)
    console.log('print something')
    return (
        <div className={style['get-user-input-main']}>
            <input className={`${style['input-fild']}`}  ref={inputFildRefrence} placeholder={inputPlaseHolderState}/>
            <button className={style['button-style']}>ADD</button>
        </div>
    )
}

export default GetUserInput;