
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import { SearchProvider } from './Context/SearchContext';
import Header from './Pages/Header';


function App() {
  return (
    <div className=''>
    <BrowserRouter>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header/>}></Route>
        </Routes>
      </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
