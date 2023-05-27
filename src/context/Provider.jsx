import { createContext,useState,useEffect } from "react";


const Context = createContext();

const Provider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    
    //crear estado
    const [termino, setTermino] = useState("");

    //estado usuario
    const [users, setUsers] = useState({});
    //estado usuario
    const [favoritos, setFavoritos] = useState({});
  

    const getPizzas = async () => {
      const res = await fetch("/pizzas.json");
      const pizzas = await res.json();
      setPizzas(pizzas);
    };

    const getUser = async () => {
      const res = await fetch("/usuarios.json");
      const user = await res.json();
      setUsers(user);
    };
    
    
    useEffect(() => {
      getPizzas();
      getUser();
    }, []);

  
  // Funciones para el carro
  //1.- AGREGAR AL CARRO
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  //1.- INCREMENTAR EN 1
  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  //1.- DECREMENTAR EN 1
  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

    return (
        <Context.Provider
          value={{
            users,
            setUsers,
            termino,
            setTermino,
            pizzas,
            setPizzas,
            carrito,
            setCarrito,
            favoritos,
            setFavoritos,
            addToCart,
            increment,
            decrement
          }}
        >
          {children}
        </Context.Provider>
      );
};

// Export del provider
export { Provider };

// Export del context
export default Context;