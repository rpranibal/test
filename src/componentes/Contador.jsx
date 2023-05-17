
import { useContext } from "react";
import Context from "../context/Provider";

export default function Contador() {
    const { count,setCount } = useContext(Context);

  return (
    <>
    <div className="card">

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  </>
  );
}
