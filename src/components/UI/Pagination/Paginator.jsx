import React, { useState } from 'react';
import { getPagesArray } from '../../../utils/pages';
import './../../../App.css'
import MyButton from '../Button/MyButton';

const Paginator = ({totalPage,page,changePage}) => {
    let pagesArray = getPagesArray(totalPage)
    return (
        <div className='pages__buttons'>
            {pagesArray.map((p) => {
                return (
                    <div key={p} className={page === p ? 'page__btn page__current' : 'page__btn'}><MyButton onClick={() => changePage(p)}>{p}</MyButton></div>
                )
            })}
        </div>
    )
}

export default Paginator;