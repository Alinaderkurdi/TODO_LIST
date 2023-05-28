   
import React  , { useState ,useRef}from 'react';
import style from  './Input-component.module.css';



const GetUserInput = (prop)=>{

    const getUserData = useRef()
    const [checkValidationInputFild , validatorChecker] = useState(true)
    const [placeholderStateText , placeholderStateUpDater]  = useState('ADD NEW !')
    
    const inputValidation = (input)=>{
        if (input.length === 0 || !input.trim()){
           validatorChecker(false)
           console.log('inValid user input')
           placeholderStateUpDater('Plase add valid input')
        }else{
            validatorChecker(true)
            console.log('valid input')
        }
    }

    const sendToPrent = ()=>{
        inputValidation(getUserData.current.value)
        checkValidationInputFild ? prop.onGetuserValue(getUserData.current.value) : validatorChecker(false)
        getUserData.current.value = '';
    }

    return (
        <div className={style['get-user-input-main']}>
            <input className={`${style['input-fild']} ${checkValidationInputFild ? '' : style['invalid-userInput']}`} placeholder={placeholderStateText}  ref={getUserData} />
            <button className={style['button-style']} onClick={sendToPrent}>ADD</button>
        </div>
    )
}

export default GetUserInput;