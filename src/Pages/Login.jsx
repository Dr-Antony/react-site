import React from 'react';
import MyInput from '../components/UI/Input/MyInput';
import MyButton from '../components/UI/Button/MyButton';
import style from './Login.module.css'
import { useContext } from 'react';
import { AuthContex } from '../contex';



const Login = (props) => {
    const {isAuth,setIsAuth} = useContext(AuthContex)
    const login = (event)=>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }
    return (
        <div className={style.login_container}>
            <h1 className={style.login_title}>Login</h1>
            <form onSubmit={login} className={style.login_forms}>
                <MyInput type="text" placeholder='Input your login' />
                <MyInput type="password" placeholder='Input your password' />
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}

export default Login;