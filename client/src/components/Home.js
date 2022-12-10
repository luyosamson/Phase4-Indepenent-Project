import React from "react";
import Navbar from "./Navbar";
import Account from "/Account"
import Footer from "./Footer";
import PlantPage from "./PlantPage";



function Home() {
  return (
    <>
   <Navbar/>
    <Account />
   <Footer/>
     <PlantPage  />
    </>
  );
}

export default Home;