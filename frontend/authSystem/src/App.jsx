import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Registration from './Pages/Registration';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App