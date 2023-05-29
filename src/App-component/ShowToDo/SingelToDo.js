import React , { useRef }from 'react';

import style from './SingelToDo.module.css';

const SingelToDo = (prop)=>{
    const pElementRefrence = useRef()
    console.log(prop)
    return (
        <div className={style['singel-main']}>
            <p className={style['show-text']} ref={pElementRefrence}></p>
        </div>
    )
}

export default SingelToDo;