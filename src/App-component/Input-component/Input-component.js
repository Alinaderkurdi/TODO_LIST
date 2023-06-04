   
import React , { useState, useRef} from 'react';
import style from  './Input-component.module.css';



const GetUserInput = (prop)=>{
    const textInput = useRef()
    const [inputPlaseHolderState , inputPlaseHolderUpDater] = useState('ADD TITEL')
    const [isValid , valueUpdater ] = useState(true)
    //const [inputObject , inputObjectUpDater]  = useState({})

    const addDate = ()=>{
        const date = new Date()
        const time = [date.getHours().toString(), date.getMinutes().toString(), date.getDay(), date.getSeconds().toString()]
        const  [ hours, minutes ] = time
        return [`${hours}:${minutes}`, time[2],time[3]]
    }


    const keyGenerator = ()=>{
        const string = '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p';
        let result =''
        let lenghtKey = 4
        for(let i = 0; i < lenghtKey ; i++){
          result += string.charAt(Math.floor(Math.random() * lenghtKey))
        }
        return  `${result}${addDate()[2]}`
    }

    const addKeyAndDate = (inputValue)=>{
        const singelToDo = {
            text: inputValue,
            time: addDate()[0],
            day: addDate()[1],
            key: keyGenerator()
        }
        prop.onGetData(singelToDo)
    }

    const inputValidation = (inputValue)=>{
        if(inputValue.length === 0 || inputValue.trim().length === 0){
            valueUpdater(false)
            inputPlaseHolderUpDater('PLASE ADD VALID INPUT')
            return false
        }else{
            valueUpdater(true)
            return true
        }
    }

    const getUserValue = ()=>{
        if(inputValidation(textInput.current.value)){
          addKeyAndDate(textInput.current.value)
          textInput.current.value = '';
        }else{
            return
        }
    }

    return (
        <div className={style['get-user-input-main']}>
            <input className={`${style['input-fild']} ${isValid ? '': style['invalid-userInput']}`} placeholder={inputPlaseHolderState} ref={textInput} />
            <button className={style['button-style']} onClick={getUserValue}><i className="bi bi-send"></i></button>
        </div>
    )
}

export default GetUserInput;