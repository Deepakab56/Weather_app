
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import { SearchProvider } from './Context/SearchContext';
import Header from './Pages/Header';
import Frontpage from './Pages/Frontpage';
import Headers from './Pages/Headers';


function App() {
  return (
    <div className='bg-dark'>
    <BrowserRouter>
      <SearchProvider>
        
        <Routes>
          <Route path='/' element={<Frontpage/>}></Route>
          <Route path='/headers' element={<Headers/>}></Route>
        </Routes>
        
        
      </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
