import React from "react";
import { SiMoneygram } from "react-icons/si";

function Header() {
  return (
    <>
      <header className="bg-blue-900 w-full">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-14 px-4">
         
          <div className="flex items-center space-x-2">
            <SiMoneygram className="text-white text-3xl" />
            <h1 className="text-white text-xl font-semibold">CURRENCY</h1>
          </div>

         
          {/* <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-blue-100 transition">
            Convert
          </button> */}
        </div>
      </header>
    </>
  );
}

export default Header;
