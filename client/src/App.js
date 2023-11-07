import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Landing from './views/landing/landing';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Form from './views/form/form';
import Nav from './components/Nav/Nav';
import './App.css';
import { getByName } from "./redux/actions"

const App = () => {
 const location = useLocation(); // Donde estoy parado
 const dispatch = useDispatch();
 const allPokemons = useSelector((state) => state.allPokemons); // Obtener los pokemones del estado
 const [searchString, setSearchString] = useState("");
  
function handleChange (event) {
  event.preventDefault();
  setSearchString(event.target.value);
};

function handleSubmit (event) {
  event.preventDefault();
  dispatch(getByName(searchString))
}

  return (
    <div className="App" style={{ padding: '25px' }}>

{location.pathname !== '/' && <Nav handleChange={handleChange} handleSubmit={handleSubmit}/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
