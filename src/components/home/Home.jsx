// import Navbar from "../header/Navbar";

// import { useLoaderData } from "react-router";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import Hero from "../header/Hero";
import Mid from "./Mid";

const Home = () => {
    // const allData = useLoaderData();
    // console.log(allData)

    useEffect(()=>{document.title = "Gadget Heaven | Home"}, [])

    
    return (
        <div>
            <Hero></Hero>
            <Mid></Mid>
            <Footer></Footer>
        </div>
    );
};

export default Home;