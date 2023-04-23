import React, { Children, createContext, useState} from "react";
export const ContextApiProvider = createContext();

const ContextApi = ({ children }) => {
  const [toker, setToker] = useState("");
 
  const [login, setLogin] = useState([]);
  
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(make);
//   };

  return (
    <ContextApiProvider.Provider
      value={{ toker,setToker,login,setLogin}}
    >
      {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;
