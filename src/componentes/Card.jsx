import { useContext } from "react";
import Context from "../context/Provider";

const Card = () => {
  // const [total, setTotal] = useState(0);
  const { termino, pizzas, setPizzas, addToCart } = useContext(Context);

  const setFavorito = (id) => {
    const productoIndex = pizzas.findIndex((p) => p.id === id);
    pizzas[productoIndex].liked = !pizzas[productoIndex].liked;
    setPizzas([...pizzas]);
    console.log(pizzas)
  };

  return (
    //agregar filtro
    <>
      {pizzas.filter((el) => {
            if (termino === "") {
              return el;
            } else if (el.name.includes(termino)) {
              return el;
            }
        }).map((p) => (
        <div key={p.id} className="col">
          <div className="card">
          <div onClick={() => setFavorito(p.id)} className="favorite">
            +
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
    </>
  );
};

export default Card;