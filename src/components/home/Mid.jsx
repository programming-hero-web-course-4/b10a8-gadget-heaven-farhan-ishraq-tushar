import { NavLink, Outlet } from "react-router";
// import Card from "./Card";
import { useContext } from "react";
import { addToCartContext } from "../../context/Context";

const Mid = () => {
  // const allData = useLoaderData();

  // Test
  const cartData = useContext(addToCartContext);
  console.log(cartData);

  // const [coffees, setCoffees] = useState([])

  // for (const allData of allDatas){
  //     console.log(allData.name);
  // }
  // console.log(allData);

  // const [d] = allData;
  // console.log(allData)

  // console.log(allData);

  return (
    <div className="pt-36 md:pt-80">
      <h1 className="text-center font-bold text-xl md:text-4xl md:mb-8">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:justify-around md:space-x-2 mx-auto">
        <div className="grid grid-cols-3 gap-2 md:gap-0 md:grid-cols-1 md:border border-gray-400 h-fit w-fit p-2 rounded-lg md:mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border md:text-nowrap border-purple-600 ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                  : ""
              }`
            }
          >
            All Product
          </NavLink>

          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border border-purple-600 ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                  : ""
              }`
            }
          >
            Laptops
          </NavLink>

          <NavLink
            to="/phones"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border border-purple-600 ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                  : ""
              }`
            }
          >
            Phones
          </NavLink>

          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border border-purple-600 ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                  : ""
              }`
            }
          >
            Accessories
          </NavLink>

          <NavLink
            to="/smart-watches"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border border-purple-600 md:text-nowrap ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white md:text-nowrap"
                  : ""
              }`
            }
          >
            Smart Watches
          </NavLink>

          <NavLink
            to="/iPhone"
            className={({ isActive }) =>
              `font-semibold md:text-lg btn px-12 md:m-2 border border-purple-600 md:text-nowrap ${
                isActive
                  ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white md:text-nowrap"
                  : ""
              }`
            }
          >
            iPhones
          </NavLink>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 md:pt-0 border-4"> */}

        <Outlet></Outlet>

        {/* {
                        allData.map(
                            gadget => (
                                <Card key={gadget.product_id} gadget={gadget}></Card>
                            )
                        )
                    } */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Mid;
