import React from "react";
import logo from "../assets/motionarteffect-img2.png";

const Navbar = () => {
  return (
    <div className="bg-black border-b border-b-slate-500 fixed w-full z-50 top-0 ">
      <div className="flex justify-between items-center h-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    
          <div className="flex gap-1 justify-center items-center text-white">
            <img src={logo} className="h-10" alt="Logo" />
            <div>
              envato<span className="text-caribbeangreen-50">market</span>
            </div>
          </div>
   
   
        <div>
          <button className="text-white bg-green-400 font-semibold py-2 px-5 mr-4 mt-2 hover:scale-95 transition-all rounded-md border border-richblack-5">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
