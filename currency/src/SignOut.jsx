import React from "react";

import { auth } from "./fireBaseAuth";
import { signOut } from "firebase/auth";

function SignOut() {
  return (
    <div>
      <button
        onClick={() => signOut(auth)}
        className="bg-red-600 p-2 m-2 text-white rounded-lg cursor-pointer mr-8 transition-transform duration-300 hover:scale-110 "
      >
        Çıkış Yap
      </button>
    </div>
  );
}

export default SignOut;
