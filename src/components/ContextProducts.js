import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  var [cart, setcart] = React.useState([]);

  return (
    <ProductContext.Provider value={[cart, setcart]}>
      {props.children}
    </ProductContext.Provider>
  );
};
