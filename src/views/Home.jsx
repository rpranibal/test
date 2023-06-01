import Card from "../componentes/Card";
import { useContext } from "react";
import Context from "../context/Provider";

const Home = () => {
  const { setTermino} = useContext(Context);
  return (
    <>
      <div className="container my-4">
      <div className="buscador">
          
          <input  type="search" placeholder="Busca tu producto" aria-label="Search" onChange={(e) => {
                 setTermino(e.target.value);
          }}/>
      </div>
        <div className="lista-productos row row-cols-1 row-cols-md-3 g-4">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
