import {React} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


//pages
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Create from './pages/create/Create'
/* import Search from './pages/search/Search' */
import NavBar from './components/NavBar'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
//styles
import './App.css'



function App() {
  const {mode} = useTheme()
  return (
    <BrowserRouter>
    <div className={`App ${mode}`}>
      <NavBar/>
      <ThemeSelector/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        {/* <Route path='/search' element={<Search/>} /> */}
        <Route path='/recipes/:id' element={<Recipes/>} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App
