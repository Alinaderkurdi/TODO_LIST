import React , { useRef }from 'react';

import style from './SingelToDo.module.css';

const SingelToDo = (prop, pTow)=>{
    const pElementRefrence = useRef()

    const printSomeThingByClick = (e)=>{
        console.log(e)
        pTow.OnGetBackData('hi')
    }
    return (
        <div className={style['singel-main']}>
            <p className={style['show-text']} ref={pElementRefrence}>
             {prop.Data}
            </p>
            <button onClick={printSomeThingByClick}>test</button>
        </div>
    )
}

export default SingelToDo;