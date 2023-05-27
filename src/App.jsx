import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./context/Provider";

import Home from "./views/Home";
import IniciarSesion from "./views/IniciarSesion";
import Registrate from "./views/Registrate";
import NuevoProducto from "./views/nuevoProducto";
import Navbar from "./componentes/Navbar";
import Carrito from "./views/Carrito";
import Favorito from "./views/Favorito";

import './App.css'

function App() {
  return (
      <BrowserRouter>

      
        <Provider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<IniciarSesion/>} />
            <Route path="/registrate" element={<Registrate/>} />
            <Route path="/nuevoProducto" element={<NuevoProducto/>} />
            <Route path="/favorito" element={<Favorito/>} />
          </Routes>
        </Provider>


      </BrowserRouter>
  )
}

export default App
