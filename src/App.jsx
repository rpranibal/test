import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./context/Provider";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import Navbar from "./componentes/Navbar";
import './App.css'

function App() {
  return (
        <BrowserRouter>
        <Provider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Provider>
      </BrowserRouter>
  )
}

export default App
