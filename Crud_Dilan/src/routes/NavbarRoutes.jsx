import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Buscar/Buscar'; 
import Carrito from './pages/Carrito/Carrito'; 
import Categorias from './pages/Categorias/Categorias'; 
import Comprar from './pages/Comprar/Comprar'; 
import IniciarSesion from '../pages/IniciarSesion/IniciarSesion';
import Registro from '../pages/Registro/Registro';
import QueEsStayInStyle from '../pages/QueEsStayInStyle/QueEsStayInStyle';
import QuienesSomos from '../pages/QuienesSomos/QuienesSomos';
import AñadirACesta from '../pages/AñadirACesta/AñadirACesta';

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/Inicio" element={< Inicio />} />
      <Route path="/IniciarSesion" element={<IniciarSesion />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Carrito" element={<Carrito />} />  
      <Route path="Categorias" element={<Categorias />} />
      <Route path="/QuienesSomos" element={<QuienesSomos />} />
      <Route path="/QueEsStayInStyle" element={<QueEsStayInStyle />} />
      <Route path="/AñadirACesta" element={<AñadirACesta />} />
      <Route path="/Comprar" element={<Comprar />} />
    </Routes>
  );
};

export default NavbarRoutes;
