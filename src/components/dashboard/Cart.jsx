// import { addToCard } from "../home/cardData_favData";

import { useContext, useEffect, useState } from "react";
// import { addToCartContext } from "../../context/Context";
import CartItem from "./CartItem";
// import Navbar from "../header/Navbar";
import { addToCartContext } from "../../context/Context";
import { useNavigate } from "react-router";

// console.log(addToCard())
const Cart = () => {
  // goto Home page
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const { preCartData, updateData } = useContext(addToCartContext);
  console.log(preCartData);
  console.log(updateData);

  const cartData = JSON.parse(localStorage.getItem("cardData")) || [];

  // if (preCartData.length === 0) {
  //     const isDisabled = true;
  // }
  const [isDisabled, setDisabled] = useState(false);
  useEffect(() => {
    const checkPurchaseBtn = JSON.parse(
      localStorage.getItem("purchaseBtnDisabled")
    );
    setDisabled(checkPurchaseBtn);

    const priceCheck = JSON.parse(localStorage.getItem("gadgetPrice")) || [];

    if (priceCheck.length === 0) {
      setDisabled(true);
    }
  }, []);
  const [pCartData, setCartData] = useState(cartData);

  const handlePurchase = () => {
    // console.log(cartData.length)
    // cartData.push[null]
    //  const isTrue = false;
    // if(isTrue){
    //
    // }else{
    // cartData.length = 0;
    // cartData = []
    // cartData.push("New Data")
    // console.log(cartData);
    // localStorage.setItem("cardData", JSON.stringify([]));
    // localStorage.setItem("gadgetPrice", JSON.stringify([]))
    // setCartData([])
    console.log(cartData);
    localStorage.setItem("cardData", JSON.stringify([]));
    localStorage.setItem("gadgetPrice", JSON.stringify([]));
    localStorage.setItem("purchaseBtnDisabled", true);
    setCartData([]);
    updateData([]);
    setDisabled(true);

    // const isDisabled = true;

    // }
    // preCartData = [];
    // localStorage.clear("cardData");
    // cartData.push("test")
    // const setData = localStorage.setItem("cardData", JSON.stringify([]))
    // setCartData(JSON.parse(localStorage.setItem("cardData", JSON.stringify([]))));
  };

  // const [prePrice, updatedPrice] = useState(0)

  const priceData = JSON.parse(localStorage.getItem("gadgetPrice")) || [];
  console.log(priceData);

  // price calculation functionality
  const totalPrice = priceData.reduce((prePrice, updatedPrice) => {
    return prePrice + updatedPrice;
  }, 0);
  const sumPrice = totalPrice.toFixed(2);
  console.log(sumPrice);

  // const [price, updatePrice] = useState(0);
  // console.log(price)
  // () => {

  //     updatePrice(price+1)
  // }
  // cartData.forEach(element => {
  //     // const [price, updatePrice] = useState(0);
  //     const toatalPrice = () => {
  //         updatePrice(price + element.price)
  //     }
  //     // updatePrice(price + element.price)
  //     // element.price++
  //     console.log(element.price)
  // });

  // for (const element of cartData){
  //     const toatlPrice = element.price
  //     console.log(element.price)
  // }

  // const whitelistData = useContext()
  console.log(cartData);

  // sorting functionality
  const sortByPrice = () => {
    // const cartItem = JSON.parse(localStorage.getItem("cardData")) || [];
    // cartItem.sort((a, b) => b.price - a.price);
    const cartData = JSON.parse(localStorage.getItem("cardData")) || [];
    cartData.sort((a, b) => b.price - a.price);
    localStorage.setItem("cardData", JSON.stringify(cartData));
    // setCartData(cartItem);
    setCartData(cartData);
    // cartData = cartItem;
    // console.log(pCartData);
    console.log(cartData);

    // alert(cartItem)
  };

  // const [price, updatePrice] = useState("");
  // const handlePrice = (addedPrice) => {
  //    const updatePrice(price + addedPrice)
  // };

  // console.log(cart)

  return (
    <div className="mt-10 mb-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-11/12 mx-auto">
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl md:text-3xl">Cart</h1>
            <h1 className="font-semibold text-nowrap text-orange-6 00  text-orange-600
              text-lg md:text-2xl">
              Total Price: {sumPrice}$
            </h1>
          </div>

          <div className="flex justify-between w-full md:gap-4 items-center md:justify-end pt-2">
            <button
              className="flex text-nowrap gap-2 text-lg bg-violet-700 hover:bg-violet-600
               text-white px-4 py-1.5 
                  rounded-full md:py-2 "
              // className="py-2 px-4 text-nowrap md:text-lg rounded-badge
              //  text-slate-50 bg-violet-700 hover:bg-violet-600"
              onClick={sortByPrice}
            >
              Sort by Price
            </button>

            <button
              //   className="py-1 px-4 text-nowrap md:text-lg  rounded-badge  text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500"

              className={` ${
                isDisabled
                  ? `flex text-nowrap text-lg gap-2 disabled  bg-gray-300 text-slate-500 
                  px-4 py-1.5 md:py-2 w-36 md:w-32 rounded-badge justify-center`
                  : `flex text-nowrap gap-2 text-lg bg-purple-500 text-white px-4 py-1.5 
                  rounded-full w-36 md:py-2  md:w-32 justify-center`
              }`}
              disabled={isDisabled}
              onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handlePurchase();
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        {pCartData.map((cart) => (
          <CartItem key={cart.product_id} cart={cart}></CartItem>
        ))}
      </div>

      {/* <Navbar></Navbar> */}

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulation!</h3>
          <p className="py-4">
            You have successfully purchased your cart items.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-warning" onClick={goToHome}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
