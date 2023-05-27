import { useContext } from "react";
import Context from "../context/Provider";

const Favorito = () => {
  // const [total, setTotal] = useState(0);
  const {  pizzas, setPizzas, addToCart } = useContext(Context);

  const deleteFavorito = (id) => {
    const productosIndex = pizzas.findIndex((e) => e.id === id);
    pizzas[productosIndex].liked = !pizzas[productosIndex].liked;
    setPizzas([...pizzas]);
  };

  return (
    <>
    <div className="lista-productos">
        {pizzas.filter((elem) => elem.liked)?.map((p) => (
        <div key={p.id} className="col">
          <div className="card">
          <div onClick={() => deleteFavorito(p.id)} className="favorite">
            -
          </div>
            <img className="card-img-top" src={p.img} alt="" width="300px"/>
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {p.name}</h4>
              <hr />
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${p.price}
            </h2>

            <div className="d-flex justify-content-around mb-4">
              <button
                className="btn btn-danger"
                onClick={() => addToCart(p)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Favorito;