import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import Poets from './Poets';
import Franko from './Poets/Franko';
import Taras from './Poets/Taras';
import Lesya from './Poets/Lesya';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Main />}>
          <Route path='home' element={<Home/>}></Route>
          <Route path='poets' element={<Poets/>}>
          </Route>
          <Route path='poets/franko' element={<Franko/>}></Route>
          <Route path='poets/taras' element={<Taras/>}></Route>
          <Route path='poets/lesya' element={<Lesya/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
