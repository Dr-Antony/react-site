import React from 'react';
import style from './MyModal.module.css'
import classNames from 'classnames';
const MyModal = ({children,visible,setVisible}) => {

    const visibleStyle = classNames(style.myModal,{[style.active]:visible===true})

    return (
        <div className={visibleStyle} onClick={()=>{setVisible(false)}}>
            <div className={style.myModalContent} onClick={(e)=>{e.stopPropagation()}} >
                {children}
            </div>
        </div>
    )
}

export default MyModal;