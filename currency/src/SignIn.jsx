import React from "react";

import { auth } from "./fireBaseAuth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
  const clickHandle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <button
        onClick={clickHandle}
        className="bg-blue-500 p-2 m-2 text-white rounded-lg cursor-pointer mr-8 transition-transform duration-300 hover:scale-110"
      >
        Google İle Giriş Yap
      </button>
    </div>
  );
}

export default SignIn;
