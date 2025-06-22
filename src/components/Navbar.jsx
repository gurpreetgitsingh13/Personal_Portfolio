import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-10 bg-black text-white text-lg font-semibold shadow-md">
      <h1 className="text-white text-2xl font-bold">Gurpreet-Git-Singh</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-red-600">About</a>
        <a href="#projects" className="hover:text-red-600">Projects</a>
        <a href="#contact" className="hover:text-red-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
