import { useContext } from "react";
import Context from "../context/Provider";
import { useNavigate } from "react-router-dom";

const Card = () => {
  // const [total, setTotal] = useState(0);
  const { pizzas, addToCart } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <div className="card">
            <img className="card-img-top" src={pizza.img} alt="" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
              <hr />
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${pizza.price}
            </h2>

            <div className="d-flex justify-content-around mb-4">
              <button
                className="btn btn-danger"
                onClick={() => addToCart(pizza)}
              >
                Añadir
                {/* &#128722; */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;