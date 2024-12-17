import { Link } from "react-router";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="bg-[#9538E2] h-[490px]  md:h-[500px] text-white text-center">
        <div className="space-y-4 pt-4 md:pt-8">
          <h1 className="font-extrabold px-2 text-2xl md:text-3xl lg:text-4xl">
            Upgrade Your Tech Accessorize with <br className="hidden md:flex" />
            Gadget Heaven Accessories
          </h1>

          <p className="p-2 md:text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. <br className="hidden md:flex" /> From smart devices to
            the coolest accessories, we have it all!
          </p>

          <Link to="/dashboard" className="btn rounded-badge px-8 text-base">
            Shop Now
          </Link>
        </div>

        <div className="flex justify-center pt-10 ">
          <img
            className="h-[200px] min-w-[200px] md:h-[400px] md:w-[650px] rounded-2xl border-8 border-purple-400 divide-y-2 divide-x-2"
            src="/img/banner.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
