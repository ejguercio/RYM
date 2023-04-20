import './App.css';
import Cards from './components/cards/Cards.jsx';
//import SearchBar from './components/search-bar/SearchBar.jsx';
import Nav from './components/nav/Nav';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Nav/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
