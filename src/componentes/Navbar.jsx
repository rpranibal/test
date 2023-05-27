import { useContext } from "react";
import Context from "../context/Provider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {  carrito } = useContext(Context);

  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );
  
  return (
        //agregar input con onchange apuntando al setTermino
    <>
      <div className="barritaloca">
        <div className="linkLocos">
            <Link to="/">
              home
            </Link>
            <Link to="/login">
              iniciar sesion
            </Link>
            <Link to="/registrate">
              registrarse
            </Link>
            <Link to="/nuevoProducto">
              nueva producto
            </Link>
            <Link to="/favorito">
              favoritos
            </Link>
        </div>
        <div>
            <h4>TOTAL DEL CARRITO</h4>
            <Link to="/carrito" className="logo-nombre mx-1 mb-0">
              <h4 className="mb-0">
                Total: ${total}
              </h4>
            </Link>
          </div>
      </div>
    </>      
  );
};

export default Navbar;
