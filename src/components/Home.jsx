import React from "react";
import Navbar from "./utils/Navbar";
import Hero from "./Hero";

const Home = () => {
 

  return (
    <div
      className="bg-[#EBEBEB] h-screen w-screen font-[Gilroy] flex flex-col justify-end">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
