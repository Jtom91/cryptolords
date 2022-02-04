import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./component/nav";
import { Home, Form, Missing } from "./pages";
import "./App.css";


function App() {
  return (
    <>
      <div className='App'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/missing' element={<Missing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
