import {useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import Context from "../context/Provider";

export default function Registrarse() {
  const navigate = useNavigate();
  const {users, setUsers } = useContext(Context);

  //estado actual de input inciar sesion
  const [userReg, setUserReg] = useState({});

  
  const addUser = () => {
    let conta = 3
    setUsers([...users, {userId: conta++,correo: userReg.correo,contraseña: userReg.contraseña, favorito: [], }]);
    alert("Usuario Creado con éxito, intente iniciar sesión");
    navigate("/login");
  };
  

  return (
    <div className="bg-light vh-100 pt-5">
      <div className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h6>Registrarse</h6>
        </div>
        <div className="mb-3">
          <div>Email address</div>
          <input
            onChange={({ target }) =>
              setUserReg({ ...userReg, ["correo"]: target.value })
            }
            type="email"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div className="mb-3" >
          <div>Password</div>
          <input
            onChange={({ target }) =>
              setUserReg({ ...userReg, ["contraseña"]: target.value })
            }
            type="password"
            placeholder="******"
          />
        </div>
        <button onClick={addUser}>
          Registrarme
        </button>
      </div>
    </div>
  );
}
