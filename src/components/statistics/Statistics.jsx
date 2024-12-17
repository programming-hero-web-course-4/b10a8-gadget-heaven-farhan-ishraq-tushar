// import React from 'react';

import { useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

const Statistics = () => {
    useEffect(()=>{document.title = "Gadget Heaven | Statistics"}, [])
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="pl-8 pt-4 font-semibold  text-violet-600 text-2xl md:text-4xl lg:text-6xl">Statistics</h1>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-fuchsia-700 font-semibold  text-2xl md:text-4xl lg:text-6xl">
          No statistics is available
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Statistics;
