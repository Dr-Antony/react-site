import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../../../Pages/Posts';
import { routes } from '../../../router/routers';

import { privateRoutes, publicRoutes } from '../../../router/routers';
import { AuthContex } from '../../../contex';
import Preloader from '../../Preloader/Preloader';



const AppRouter = (props) => {
    const {isAuth,isLoading} = useContext(AuthContex);
    if (isLoading) {
        return <Preloader/>
    }
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map((route) => {
                    return (
                        <Route key={route.path} exact={route.exact} path={route.path} element={<route.component />} />
                    )
                })
                :
                publicRoutes.map((route) => {
                    return (
                        <Route key={route.path} exact={route.exact} path={route.path} element={<route.component />} />
                    )
                })}
            <Route path="*" element={<Posts />} />
        </Routes>
    )
}

export default AppRouter;