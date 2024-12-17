import { Link } from "react-router";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const NotFound = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col mt-20 items-center h-screen text-center">
        <h1 className="text-3xl md:text-[50px] font-bold text-purple-700 pb-12">
          This page is not available !!!
        </h1>
        <img
          className="h-[350px] rounded-full"
          src="/img/error.webp"
          alt=""
        />

        <Link to="/" className="btn btn-warning mt-6">
          Go To Home Page
        </Link>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default NotFound;
