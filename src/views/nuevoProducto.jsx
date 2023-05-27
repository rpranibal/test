import {useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import Context from "../context/Provider";

export default function Registrarse() {
  const navigate = useNavigate();
  const {pizzas, setPizzas } = useContext(Context);

  //estado actual de input inciar sesion
  const [producto, setProducto] = useState({});

  
  const addProducto = () => {
    let conta 
    setPizzas([...pizzas, {desc: producto.desc,id: conta++,img: producto.img, name: producto.name, price: Number(producto.precio), liked: false }]);
    alert("Producto agregado con exito");
    navigate("/");
  };

  //https://i.pinimg.com/originals/2b/48/22/2b482205faf62b16a59c1d6df7025241.jpg
  

  return (
    <div className="bg-light vh-100 pt-5">
      <div className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h6>Nuevo producto</h6>
        </div>
        <div className="mb-3">
          <div>Nombre Pizza</div>
          <input
            onChange={({ target }) =>
            setProducto({ ...producto, ["name"]: target.value })
            }
            type="text"
            placeholder="pizza napolitana"
          />
        </div>
        <div className="mb-3" >
          <div>Precio</div>
          <input
            onChange={({ target }) =>
            setProducto({ ...producto, ["precio"]: target.value })
            }
            type="number"
            placeholder="5990"
          />
        </div>
        <div className="mb-3" >
          <div>Imagen</div>
          <input
            onChange={({ target }) =>
            setProducto({ ...producto, ["img"]: target.value })
            }
            type="text"
            placeholder="URL Imagen"
          />
        </div>
        <div className="mb-3" >
          <div>Descripcion</div>
          <input
            onChange={({ target }) =>
            setProducto({ ...producto, ["desc"]: target.value })
            }
            type="text"
            placeholder="Descripcion"
          />
        </div>
        <button onClick={addProducto}>
          Agregar Producto
        </button>
      </div>
    </div>
  );
}
