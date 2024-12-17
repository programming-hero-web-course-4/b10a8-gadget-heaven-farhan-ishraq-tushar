import { NavLink, Outlet } from "react-router";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { useEffect } from "react";

// const cartData = JSON.parse(localStorage.getItem("cardData")) || [];
// console.log(cartData)

const Dashboard = () => {
  useEffect(()=>{document.title = "Gadget Heaven | Dashboard"}, [])
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div className="text-center w-full py-4 md:py-8 px-4  bg-violet-500 ">
          <h1 className="font-bold text-2xl text-white pb-2">Dashboard</h1>
          <p className="text-lg text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br className="md:hidden lg:block" />{" "}
            to the coolest accessories, we have it all!
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "bg-fuchsia-600 hover:bg-fuchsia-500 p-2 rounded-full text-white mt-1 w-28"
                    : "bg-white text-purple-500 font-semibold px-4 p-2 rounded-full text-base mt-1 w-28"
                }`
              }
            >
              <button>Cart</button>
            </NavLink>

            <NavLink
              to="/dashboard/wishlist"
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "bg-fuchsia-600 hover:bg-fuchsia-500 p-2 rounded-full text-white mt-1 w-28"
                    : "bg-white text-purple-500 font-semibold p-2 rounded-full text-base mt-1 w-28"
                }`
              }
            >
              <button>Wishlist</button>
            </NavLink>
          </div>
        </div>
      </div>

      {<Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
