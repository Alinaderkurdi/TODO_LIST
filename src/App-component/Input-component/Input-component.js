   
import React , { useState, useRef} from 'react';
import style from  './Input-component.module.css';




const GetUserInput = (prop)=>{
    const textInput = useRef()
    const [inputPlaseHolderState , inputPlaseHolderUpDater] = useState('ADD TITEL')
    const [isValid , valueUpdater ] = useState()


    const inputValidation = (inValue)=>{
        if(inValue.length === 0 || inValue.length === ' '){
            valueUpdater(false)
            inputPlaseHolderState('PLASE ADD VALID INPUT')
        }else{
            valueUpdater(true)
        }
    }



    const getUserValue = ()=>{
      inputValidation(textInput.current.value)

    }


    return (
        <div className={style['get-user-input-main']}>
            <input className={`${style['input-fild']}`} placeholder={inputPlaseHolderState} ref={textInput} />
            <button className={style['button-style']} onClick={getUserValue}>ADD</button>
        </div>
    )
}

export default GetUserInput;