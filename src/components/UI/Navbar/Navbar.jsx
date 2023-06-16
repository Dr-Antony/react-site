import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './Navbar.module.css'


import { useContext } from 'react';
import { AuthContex } from '../../../contex';



const Navbar = (props) => {
    const { isAuth, setIsAuth } = useContext(AuthContex);
    const logout = ()=>{
        setIsAuth(false);
        localStorage.setItem('auth','false')
    }
    return (
        <div className={style.App__nav}>
            <div className={style.App__nav_item}>
                <Link to={isAuth ?'/about':'/login'}>About</Link>
            </div>
            <div className={style.App__nav_item}>
                <Link to={isAuth ?'/posts':'/login'}>Posts</Link>
            </div>
            {isAuth
                ?
                <div className={style.App__nav_item}>
                    <Link onClick={logout} to={'/login'}>Log out</Link>
                </div>
                :
                <div className={style.App__nav_item}>
                    <Link  to={'/login'}>Login</Link>
                </div>
            }

        </div>
    )
}

export default Navbar;