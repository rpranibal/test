import { useContext} from "react";
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

  // Funcion Ordenar recibe la opcion seleccionada con el onChange
  // y ene ste caso utilice Switch para ir diferenciando cada valor de los option del select
  // *** no es obligatorio usar switch tambien podemos usar if else
  // En cada opcion utilizo el metodo sort para ordenar segun los esperado menor mayor, mayor menor, A-Z y Z-A
  // y cada vez que ordena con el sort() vuelvo a guardar pizzas ordenadas con setPizzas.
  // obligando a cambiar el estado del Pizzas y cambiando el orden de la renderizacion con el .map()

  function Ordenar(e) {
    switch (e) {
      case 'medema':
        pizzas.sort((a, b) => a.price - b.price);
        setPizzas([...pizzas]);
        break;
      case 'mademe':
        pizzas.sort((a, b) => b.price - a.price);
        setPizzas([...pizzas]);
        break;
      case 'a-z':
       pizzas.sort((a, b) => a.name.localeCompare(b.name));
       setPizzas([...pizzas])
        break;
      case 'z-a':
       pizzas.sort((a, b) => b.name.localeCompare(a.name));
       setPizzas([...pizzas])
       break;
      default:
        console.log(`Sorry, we are out of ${e}.`);
    }
  }


  return (
    //Agregar Select en el archivo que tengas tu map de productos 
    //En el select se usa un onChange para capturar el valor que se selecciona
    //En el onChange se llama a una funcion que se encargara de ordenar segun la opcion seleccionada.
    <>
      <div className="selector">
        <select onChange={(e) => {Ordenar(e.target.value);}}>
          <option value="default" disabled>Ordenar por:</option>
          <option value="medema">Precio: menor a mayor</option>
          <option value="mademe">Precio: mayor a menor</option>
          <option value="a-z">Alfabeticamente: A-Z</option>
          <option value="z-a">Alfabeticamente: Z-A</option>
        </select>
      </div>

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