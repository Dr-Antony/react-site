import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter/AppRouter';

import { AuthContex } from './contex';




function App() {
  const [isAuth,setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  },[])
  return (
    <AuthContex.Provider value={{isAuth,setIsAuth,isLoading}}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='App__body'>
            <AppRouter />
          </div>
        </div>
      </BrowserRouter>
    </AuthContex.Provider>
  );
}

export default App;
