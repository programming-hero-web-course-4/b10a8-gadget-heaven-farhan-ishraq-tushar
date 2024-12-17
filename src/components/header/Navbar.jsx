// import { useContext, useState } from "react";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { addToCartContext } from "../../context/Context";
// import { addToCartContext } from "../../context/Context";

const Navbar = () => {
  // const cardData = JSON.parse(localStorage.getItem("cardData")) || [];

  // const [preCardData, updateCardData] = useState([]);

  const location = useLocation();
  const track = location.pathname;

  // if (location.pathname === "/" || location.pathname === "/laptops") {
  //   //
  // }

  // location === '/'
  // console.log(location)

  // if (location.pathname === '/') {
  //   // document.getElementById("navBar").classList.add('text-black')
  // }

  const { preCartData } = useContext(addToCartContext);

  const wishLIstData = JSON.parse(localStorage.getItem("whitelistData")) || [];

  console.log(preCartData);
  console.log(wishLIstData.length);

  // <div className="lg:px-12  " id="navBar">
  return (
    <div
      className={`${
        track === "/" ||
        track === "/laptops" ||
        track === "/phones" ||
        track === "/accessories" ||
        track === "/smart-watches" ||
        track === "/iPhone"
          ? `lg:px-12 text-white bg-[#9538E2]`
          : `lg:px-12 text-black`
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-purple-500"
            >
              <Link to="/">Home</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/faq">FAQ</Link>
            </ul>
          </div>

          <Link to="/" className="text-nowrap md:text-2xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8  menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive ||
                    track === "/laptops" ||
                    track === "/phones" ||
                    track === "/accessories" ||
                    track === "/smart-watches" ||
                    track === "/iPhone"
                      ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-red"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                      : ""
                  }`
                }
              >
                Statistics
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                      : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "bg-violet-800 hover:bg-violet-700 p-1.5 rounded-lg text-white"
                      : ""
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4 md:space-x-8 px-2">
          <Link
            to="/dashboard/wishlist"
            className="bg-violet-800 rounded-badge p-1 text-white"
          >
            <div className="flex gap-0.5">
              <img
                src="/img/icons8-favorites-100.png"
                className="h-6 w-6 md:flex"
              />
              <div className="text-white-700 bg-red-600 px-1  rounded-full">
                {wishLIstData.length}
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/cart"
            className="bg-violet-800 rounded-badge p-1 px-2 text-white"
          >
            <div className="flex gap-0.5">
              <img src="/img/icons8-cart-100.png" className="h-6 w-6" />
              <div className="text-white-700 bg-red-600 px-1  rounded-full">
                {preCartData.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
