import React from 'react'
import { Link } from 'react-router-dom';
import './styleNav.css'

export function NavBar() {
  return (
    <header id='header'>
        <nav>
            <img src="/src/assets/iconoPagina.gif" alt=""/>
            <h1>TuCelu</h1>
            <Link className='linkInicio' to="/"> <button>Inicio</button></Link>
            <Link className='link' to="/dolar"><button id="botonDolar">COTIZACION ACTUAL DOLAR BLUE!</button></Link>
        </nav>
    </header>
  )
}