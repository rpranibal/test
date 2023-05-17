import { useContext } from "react";
import Context from "../context/Provider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carrito } = useContext(Context);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );
  return (
    <>
          <h4>TOTAL DEL CARRITO</h4>
          <Link to="/carrito" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">
              Total: ${total}
            </h4>
          </Link>
          <hr />
    </>      
  );
};

export default Navbar;
