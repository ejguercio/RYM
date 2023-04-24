import './App.css';
//import SearchBar from './components/search-bar/SearchBar.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/deatil/Deatil";
import Form from "./components/form/Form";

function App() {
   const [characters, setCharacters] = useState([]);
   const navigate=useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "juan@gmail.com";
   const PASSWORD = "123456";

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      };
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


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

   const { pathname } = useLocation(); {/*del objeto useLocation saco la propiedad pathname con destructuring*/ }
   return (
      <div className='App'>
         {pathname !== "/" && <Nav onSearch={onSearch} />} {/* si no estoy en el login muestro la navBar */}
         <Routes>
            <Route path="/"
               element={<Form login={login} />} />
            <Route path="/about"
               element={<About />} />
            <Route path="/home"
               element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/detail/:detailId"
               element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;
