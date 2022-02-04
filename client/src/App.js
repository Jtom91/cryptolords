import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Form, Missing } from "./pages";
import "./App.css";


function App() {
  return (
    <>
      <div className='App'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/connect' element={<Form />} />
          <Route path='/not_found' element={<Missing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
