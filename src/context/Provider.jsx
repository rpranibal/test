import { createContext,useState } from "react";


const Context = createContext();

const Provider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <Context.Provider
          value={{
            count,
            setCount
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