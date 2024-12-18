import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { addToCartContext } from "../../context/Context";
// import CardDataContext from "../../context/CardDataContext";
// import { addToCard } from "./cardData_favData";
//  export const cardDataContext = createContext();

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);

  // identifying id of the element that was clicked
  const { id } = useParams();
  console.log(id);

  //   // disabling button when item is added to the card
  //   //   const cartTrueFalse = localStorage.getItem("setItem")|| null;
  //   const [isDisabled, setIsDisabled] = useState();

  // disabling button when item is added to the whitelist
  //   const [isListedDisabled, setIsListedDisabled] = useState(false);
  //   const handleDisabled = () => {};

  // const {gadget} = data;
  const [gadget, setGadget] = useState({});

  const { preCartData, updateData } = useContext(addToCartContext);
  //   const cartData = JSON.parse(localStorage.getItem("cardData")) || [];
  const cartData = preCartData;

  const [newPreCartData, setCartData] = useState(cartData);
  console.log(newPreCartData);

  const wishLIstData = JSON.parse(localStorage.getItem("whitelistData")) || [];
  const [preWishListData, setListData] = useState(wishLIstData);
  console.log(preWishListData);

  // const [isInCard, setCard] = useState();

  // finding out the data of the element(element that was previously identified by id)
  useEffect(() => {
    const singleData = data.find((gadget) => gadget.product_id == id);
    setGadget(singleData);
  }, [data, id]);

  const {
    product_title,
    product_image,
    description,
    price,
    availability,
    Specification,
    product_id,
  } = gadget;

  // const [test1, test2] = useState([])
  //   const handleCartBtn = () => {
  //     setIsDisabled(true)
  //   }
  const setCardData = JSON.parse(localStorage.getItem("cardData")) || [];
  const whitelistData= JSON.parse(localStorage.getItem("whitelistData")) || [];

  // const isExist = setCardData.find((p) => p.product_id === product_id);

  const isListExist = whitelistData.find((p) => p.product_id === product_id);

  if(isListExist !== undefined){
    document.getElementById("wishList").disabled = true;
    document.getElementById("wishList").style.backgroundColor = "gray";
  }
  

  console.log(isListExist);
  //    disabling button when item is added to the card
  //   const cartTrueFalse = localStorage.getItem("setItem")|| null;
  //   const [isDisabled, setIsDisabled] = useState(false);

  const addToCard = () => {
    /* 
            Checking if the item is already in the cart or not. If no matched 
            item is found, the result would be undefined.
        */
    const isExist = setCardData.find((p) => p.product_id === product_id);

    if (isExist !== undefined) {
      toast.error(
        <div className="flex items-center justify-center gap-1">
          <img className="w-[50px]" src={product_image} />
          <h1>
            <span className="font-semibold">{product_title} </span> is already
            added to the cart
          </h1>
        </div>
      );
      //   setIsDisabled(false);
    } else {
      // localStorage.setItem("setItem", true);
      setCardData.push(gadget);
      localStorage.setItem("cardData", JSON.stringify(setCardData));
      localStorage.setItem("purchaseBtnDisabled", false);
      //   console.log(setCardData);
      setCartData(setCardData);
      updateData(setCardData);
      //   setIsDisabled(true);
      toast.success(
        <div className="flex items-center justify-center gap-1">
          <img className="w-[50px]" src={product_image} />
          <h1>
            <span className="font-semibold">{product_title} </span> is added to
            the cart
          </h1>
        </div>
      );

      // priceData functionality
      const setGadgetPrice =
        JSON.parse(localStorage.getItem("gadgetPrice")) || [];
      setGadgetPrice.push(price);
      localStorage.setItem("gadgetPrice", JSON.stringify(setGadgetPrice));
      console.log(setGadgetPrice);
    }
  };
  // const isExist = setWishListData.find((p) => p.product_id === product_id);



  const addToWhitelist = () => {
    document.getElementById("wishList").style.backgroundColor = "gray";
    
    const setWishListData =
    JSON.parse(localStorage.getItem("whitelistData")) || [];
    
    const isExist = setWishListData.find((p) => p.product_id === product_id);
    
    if (isExist !== undefined) {

      toast.error(
        <div className="flex items-center justify-center gap-1">
          <img className="w-[50px]" src={product_image} />
          <h1>
            <span className="font-semibold">{product_title} </span> is already
            added to the whitelist
          </h1>
        </div>
      );
    } else {
      setWishListData.push(gadget);
      localStorage.setItem("whitelistData", JSON.stringify(setWishListData));
      console.log(setWishListData);
      setListData(setWishListData);
      //   setIsListedDisabled(true);
      toast.success(
        <div className="flex items-center justify-center gap-1">
          <img className="w-[50px]" src={product_image} />
          <h1>
            <span className="font-semibold">{product_title} </span> is added to
            the whitelist{" "}
          </h1>
        </div>
      );
    }
  };

  // const getCardData = () =>{
  //     const preStoredData = localStorage.getItem("cardData");
  // }

  // const test = addToCard(gadget)

  // const [cardData, setCardData] = useState([]);

  // const addToCard = () => {
  //     JSON.parse(localStorage.getItem("cardData"))
  //     localStorage.setItem('cardData', JSON.stringify(cardData));
  //     setCardData(
  //         cardData.push(gadget)
  //     )
  //      // console.log(test)
  //      // setCardData = JSON.parse(localStorage.getItem("cardData")) || [] ;
  //      // setCardData = cardData;
  //      // console.log(setCardData)
  //  }

  // let setCardData = [];
  // const addToCard = () => {
  // //    (localStorage.getItem('addToCardData'));
  //     // console.log(test)
  //     const setCardData = JSON.parse(localStorage.getItem("cardData")) || [] ;
  //     setCardData.push(gadget);
  //     localStorage.setItem('cardData', JSON.stringify(setCardData));
  //     // setCardData = cardData;
  //     console.log(setCardData)
  // }
  // console.log(setCardData)

  // console.log(cardData)

  // const [one, two] = useState([])
  // two()

  // const cardDataContext = createContext();

  // console.log(data);
  // console.log(Specification);

  // js functions
  // Getting previously selected favorite items
  // const getAllFavorites = () => {
  //     const allFavorite = localStorage.getItem('favorites')
  //     if (allFavorite) {
  //         const favorites = JSON.parse(allFavorite);
  //         return favorites;
  //     } else {
  //         return []
  //     }
  // }

  // handling favorite button
  // Handle favorite btn click
  //  const handleFavorite = (gadget) =>{
  //     addFavorite(gadget)
  //     setIsFavorite(true)
  // }

  // adding gadgets to favorite list
  // const addFavorite = gadget => {
  //     // get all previously save data
  //     console.log(gadget)
  //     const favorites = getAllFavorites()
  //     const isExist = favorites.find(item => item.id == gadget.id)
  //     if (isExist) return alert('Already exist')

  //     favorites.push(gadget)

  //     // sets gadget data in browser as array like object
  //     localStorage.setItem('favorites', JSON.stringify(favorites))
  // }

  return (
    <div className="">
      <Toaster></Toaster>

      {/* <CardDataContext ></CardDataContext> */}
      <Navbar></Navbar>

      <div className="bg-violet-500 flex flex-col justify-center items-center z-0 h-[280px]">
        <div className="text-center w-full py-8 px-4 mt-[620px] md:mt-72 ">
          <h1 className="font-bold text-2xl text-white md:pt-8">
            Product Details
          </h1>
          <p className="text-lg text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br className="md:hidden lg:block" />{" "}
            to the coolest accessories, we have it all!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-slate-100 w-11/12 md:w-11/12 lg:w-3/5 md:p-4 rounded-lg">
          {/* <div>{product_image}</div> */}
          <div className="flex mt-10 md:mt-0 justify-center items-center">
            <img
              className="w-[250px] md:min-h-[300px] md:max-h-[366px] md:w-min items-center justify-center object-contain rounded-lg md:px-4 md:py-4"
              src={product_image}
              alt=""
            />
          </div>

          <div>
            <div className="px-4 py-4 md:px-8 md:py-0">
              <h1 className="text-2xl md:text-4xl font-bold text-violet-600 ">
                {product_title}
              </h1>
              <p className="font-semibold text-lg md:text-2xl text-orange-600 w-fit">
                Price: {price}$
              </p>
              <p>
                <span className="font-normal">{description}</span>
              </p>
            </div>

            <div className=" text-base md:text-lg px-4 md:px-8">
              <h1 className="text-xl pt-4 font-medium">Specification:</h1>
              {Specification &&
                Specification.map((specify, id) => (
                  <li key={id} className="list-decimal px-4 text-base">
                    {specify}
                  </li>
                ))}
            </div>

            <div className="font-medium text-lg px-4 md:px-8 py-4">
              <p>
                Availability:{" "}
                <span className="font-normal">{availability}</span>{" "}
              </p>
              <div className="flex gap-2 items-center pb-2">
                <span className="font-normal">Rating:</span>

                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                {/* <Rating
                  onClick={handleRating}
                  initialValue={rating}
                  style={""}
                  edit={false}
                ></Rating> */}
              </div>

              <div className="flex items-center gap-4">
                <button
                  //   className="flex gap-2 bg-purple-500 text-white px-4 py-2 rounded-full text-base mt-1"
                  //   disabled={isDisabled}
                  onClick={addToCard}
                  className="flex gap-2 text-nowrap bg-purple-500
                   text-white px-4 py-2 rounded-full text-base mt-1"
                >
                  Add To Cart
                  <img
                    src="/img/icons8-cart-100.png"
                    className="h-6 w-6"
                    alt=""
                  />
                </button>

                <button
                  id="wishList"
                  onClick={addToWhitelist}
                  //   disabled={isListedDisabled}
                  className="flex gap-2 text-nowrap bg-purple-500 
                  text-white px-4 py-2 rounded-full text-base mt-1"
                  //   className={` ${
                  //     isListedDisabled
                  //       ? `flex gap-2 text-nowrap bg-gray-300 text-slate-500 px-4 py-2 rounded-full text-base mt-1`
                  //       : `flex gap-2 text-nowrap bg-purple-500 text-white px-4 py-2 rounded-full text-base mt-1`
                  //   }`}
                >
                  <img
                    src="/img/icons8-favorites-100.png"
                    alt=""
                    className="h-6 w-6 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[700px] md:mt-[500px]">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default CardDetails;
