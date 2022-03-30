import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Working from './components/Working';
import Contact from './components/Contact';
import Help from './components/Help';
import './App.css';
import {
  BrowserRouter,
  Routes,

  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <Home/> */}
     <BrowserRouter>
    <Navbar/>
   
  
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="about" element={<About />} />
        <Route path="working" element={<Working />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
      </Routes>
      </BrowserRouter> 
  
    </>
  );
}

export default App;
