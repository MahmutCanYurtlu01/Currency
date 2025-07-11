import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Currency from "./Currency";
import foto from "./image/a.jpg"



function App() {
  
  return (
    <div className="bg-cover bg-center min-h-screen" style={{backgroundImage:`url(${foto})`}} >
      <div>
        <Header />
      </div>
      <div >
        <Currency />
      </div>
    </div>
  );
}

export default App;
