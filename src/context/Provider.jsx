import { createContext,useState,useEffect } from "react";


const Context = createContext();

const Provider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
  

    const getPizzas = async () => {
      const res = await fetch("/pizzas.json");
      const pizzas = await res.json();
      setPizzas(pizzas);
    };

    
    useEffect(() => {
      getPizzas();
    }, []);

  // Funciones para el carro
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

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

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
            count,
            setCount,
            pizzas,
            carrito,
            setCarrito,
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