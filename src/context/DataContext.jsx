/* eslint-disable react/prop-types */
// import React from 'react';

// import {createContext } from "react";

// export const addToCartContext = createContext();
// import { preconnect } from "react-dom";
import { useState } from "react";
import { addToCartContext } from "./Context";

import { addToWishListContext } from "./Context";

// import { addToWhitelistContext } from "./WhitelistContext";

const addToCartData = JSON.parse(localStorage.getItem("cardData")) || [];
// const addToCartData = localStorage.getItem("cardData") ;
console.log(addToCartData);

// const [preCartData, upDateCartData] = useState(addToCartData);
// console.log(preCartData);

// const updateData = (newData) => {
//     upDateCartData(newData);
// }

const wishLIstData = JSON.parse(localStorage.getItem("whitelistData")) || [];
console.log(wishLIstData);

// const addToWhitelistData = JSON.parse(localStorage.getItem("whitelistData"));

const DataContext = ({ children }) => {
  const [preCartData, upDateCartData] = useState(addToCartData);
  console.log(preCartData);

  const updateData = (newData) => {
    upDateCartData(newData);
  };
  return (
    <div>
      <addToCartContext.Provider value={{ preCartData, updateData }}>
        <addToWishListContext.Provider value={wishLIstData}>
          {children}
        </addToWishListContext.Provider>
      </addToCartContext.Provider>

      {/* <addToWishListContext.Provider value={wishLIstData}>
                {children}
            </addToWishListContext.Provider> */}

      {/* <addToWhitelistContext.Provider>

            </addToWhitelistContext> */}
      {/* <addToWhitelistContext.Provider value={addToWhitelistData}>
                {children}
            </addToWhitelistContext> */}

      {/* <addToWhitelistContext.Provider >

            </addToWhitelistContext> */}
    </div>
  );
};

export default DataContext;
