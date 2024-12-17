// import React from 'react';

// import { Link } from "react-router";

const NoData = () => {
  return (
    <div>
      <div className="flex flex-col  items-center h-screen text-center pt-10 md:pr-20">
        <h1 className="text-3xl md:text-[50px] font-bold text-purple-700 pb-12">
          No gadget is available !!!
        </h1>
        <img className="h-[350px] rounded-full" src="/img/error.webp" alt="" />
      </div>
    </div>
  );
};

export default NoData;
