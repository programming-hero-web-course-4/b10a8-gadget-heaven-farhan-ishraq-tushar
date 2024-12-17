// import React from 'react';
import WhitelistItem from "./WhitelistItem";

// console.log(addToCard())
const Whitelist = () => {
  const whiteLIstData = JSON.parse(localStorage.getItem("whitelistData")) || [];

  // const whitelistData = useContext()
  console.log(whiteLIstData);

  // console.log(wish)

  return (
    <div className="mt-10 mb-4">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <h1 className="font-bold text-xl md:text-3xl">Wishlist</h1>
        <div className="flex gap-4 items-center"></div>
      </div>

      <div className="min-h-screen">
        {whiteLIstData.map((wish) => (
          <WhitelistItem key={wish.product_id} wish={wish}></WhitelistItem>
        ))}
      </div>
    </div>
  );
};

export default Whitelist;
