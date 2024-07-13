import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
