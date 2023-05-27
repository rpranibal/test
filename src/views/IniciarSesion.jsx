import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../context/Provider";

export default function IniciarSesion() {
  const { users } = useContext(Context);
  //estado actual de input inciar sesion
  const [userLogin, setuserLogin] = useState({});

  const navigate = useNavigate();
  console.log(users)

  //funcion agregar
  const loginUser = () => {
    if (!userLogin.correo && !userLogin.contraseña) {
      alert("campos vacios");
    } else{
      let searchUser = users.find((u) => u.correo === userLogin.correo);
      if (searchUser !== undefined) {

        if (searchUser.contraseña == userLogin.contraseña) {
          navigate(`/`);
        } else {
          alert("Contraseña equivocada");
        }

      } else {
        alert("No existe el correo");
      }
    }
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <div className="w-50 mx-auto border p-3 rounded bg-warning ">
          <h3>Iniciar sesión</h3>
        <div className="mb-3">
          <div>Correo</div>
          <input
            onChange={({ target }) =>
              setuserLogin({ ...userLogin, ["correo"]: target.value })
            }
            type="email"
            placeholder="corre@ejemplo.com"
          />
        </div>
        <div className="mb-3">
          <div>Contraseña</div>
          <input
            onChange={({ target }) =>
              setuserLogin({ ...userLogin, ["contraseña"]: target.value })
            }
            type="password"
            placeholder="******"
          />
        </div>
        <button onClick={loginUser}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
