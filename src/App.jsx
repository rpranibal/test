import { Provider } from "./context/Provider";
import Contador from "./componentes/Contador";
import './App.css'

function App() {


  return (
    <Provider>
      <Contador/>
    </Provider>
  )
}

export default App
