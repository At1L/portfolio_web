import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
