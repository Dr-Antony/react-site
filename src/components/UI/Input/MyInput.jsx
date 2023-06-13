import React, { useState } from 'react';
import style from './MyInput.module.css'
const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} className={style.input} {...props} />
    )
})

export default MyInput;