import { Link } from "react-router";

/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
  // console.log(gadget)
  const { product_title, product_image, product_id, price } = gadget;

  return (
    <div className="p-4 border border-gray-400 flex flex-col rounded-lg">
      <img
        className=" h-[200px] w-[250px] object-contain pb-2 rounded-md"
        src={product_image}
        alt=""
      />
      <div className="md:space-y-2">
        <h1 className="font-bold text-lg md:text-xl">{product_title}</h1>
        <p className="font-semibold md:text-lg">Price: {price}$</p>


        <Link to={`/gadget/${product_id}`}>
        {/* <Link to={`/${category}/${product_id}`}> */}
          <button className="px-2 py-1 text-white bg-purple-600 rounded-lg">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
