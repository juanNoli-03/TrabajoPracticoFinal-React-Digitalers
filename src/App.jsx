import React from 'react'
import  { NavBar } from './components/NavBar/NavBar'
import  { FooterBar } from './components/FooterBar/FooterBar'
import { Main } from './components/Main/Main'
import { Dolar } from './components/Dolar/dolar'
import { Detalles } from './components/Detalles/Detalles'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dolar" element={<Dolar />}/>
                <Route path="/detalles" element={<Detalles />}/>
                <Route path="*" element={<Main />} />
            </Routes>
            <FooterBar />
        </Router>
    )
}

export default App
