import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  var [cart, setcart] = useState([]);

  return (
    <ProductContext.Provider value={[cart, setcart]}>
      {props.children}
    </ProductContext.Provider>
  );
};
