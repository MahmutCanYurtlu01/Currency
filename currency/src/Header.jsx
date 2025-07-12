import React from "react";
import { SiMoneygram } from "react-icons/si";
import SignIn from "./SignIn";


import { auth } from "./fireBaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";

function Header() {
const [user]=useAuthState(auth)
  
  return (
    <>
      <header className="bg-orange-500 w-full">

        <div className="flex justify-between items-center h-14 px-4">

          <div className="flex items-center space-x-2 ml-8">
            <SiMoneygram className="text-white text-3xl" />
            <h1 className="text-white text-xl font-semibold">CURRENCY</h1>
             </div>

          <div>
           {user? <SignOut/> : <SignIn /> }
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
