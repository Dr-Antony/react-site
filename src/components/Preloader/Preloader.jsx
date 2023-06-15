import React from 'react';
import style from './Preloader.module.css'


const Preloader = (props) => {
    return (
        <div className={style.position}>
            <div className={style.lds_facebook}><div></div><div></div><div></div></div>
        </div>
    )
}

export default Preloader;