import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Currency from "./Currency";
import foto from "./image/a.jpg";

import { auth } from "./fireBaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${foto})` }}
    >
      <div>
        <Header />
      </div>
      <div>
        {/* burası düzeltilecek */}
        {user ? <Currency /> : <p>farklı currency çağır</p>}
      </div>
    </div>
  );
}

export default App;
