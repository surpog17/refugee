import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md fixed w-screen px-32 z-[1] ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          ERHMS
        </a>
        <div className="flex space-x-4">
          <a href="/" className="textwhite hover:text-gray-900">
            Home
          </a>
          <a href="/" className="textwhite hover:text-gray-900">
            Our Story
          </a>
          <a href="/" className="textwhite hover:text-gray-900">
            What We Do
          </a>
          <a href="/" className="textwhite hover:text-gray-900">
            Blog
          </a>
          <a href="/" className="textwhite hover:text-gray-900">
            Get Involved
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="textwhite">Eng</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            LET'S DONATE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
