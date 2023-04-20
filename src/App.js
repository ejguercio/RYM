import './App.css';
import Cards from './components/cards/Cards.jsx';
//import SearchBar from './components/search-bar/SearchBar.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from "axios";




function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)//peticion
         .then(({ data }) => { //respuesta a la peticion
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(personaje => personaje.id !== Number(id)))
   };


   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
