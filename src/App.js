import React from 'react';
import './App.css';
import typesContext from './typesContext';
import HeroesPage from './comp/heroesPage/HeroesPage';
import useTypes from "./comp/heroesPage/comp/useTypes";

function App() {
  const [ types, findTypeId ] = useTypes();

  return (
    <div className="App">
      <typesContext.Provider value={ { types, findTypeId } } >
        <HeroesPage />
      </typesContext.Provider>
    </div>
  );
}

export default App;
