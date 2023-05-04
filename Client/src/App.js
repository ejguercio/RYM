import './App.css';
//import SearchBar from './components/search-bar/SearchBar.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/deatil/Deatil";
import Form from "./components/form/Form";
import Favorites from './components/favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "juan@gmail.com";
   const PASSWORD = "123456";

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      };
   }

   const logout = () => { };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)//peticion
         .then((response) => response.json())  //respuesta a la peticion
         .then((data) => {
            if (data.name && !characters.find((charac) => charac.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('No es por ahí');
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(personaje => personaje.id !== Number(id)))

   };

   const { pathname } = useLocation(); //del objeto useLocation saco la propiedad pathname con destructuring
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
            <Route path="/favorites"
               element={<Favorites />} />
         </Routes>

      </div>
   );
}

export default App;
