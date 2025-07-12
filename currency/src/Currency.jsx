import React, { useEffect, useState } from "react";
import axios from "axios";

import { currencies } from "./Data/data";

const BASEURL = "https://api.freecurrencyapi.com/v1/latest";
const APIKEY = "fca_live_ALnmFIQUJ3rrPU527QWamBS1fdgbR02QIKYDMhSc";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toFromCurrency, setToFromCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const [veri,setVeri]=useState({})

  useEffect(()=>{
    const fetchRates = async () => {
    const response = await axios.get(
      `${BASEURL}?apikey=${APIKEY}&base_currency=${fromCurrency}`
    );
    // const answer = (response.data.data[toFromCurrency] * amount).toFixed(2);
    
    setVeri(response.data.data)

  };
  
  fetchRates()

  },[fromCurrency])

const exchange =  () => {
    
    const answer = (veri[toFromCurrency] * amount).toFixed(2);

    setResult(answer);
  };
  useEffect(()=>{
    exchange()
  })



  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className=" shadow-xl rounded-lg p-8 max-w-lg w-full bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Currency Converter
          </h2>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-6">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((currency) => {
                return <option key={currency}>{currency}</option>;
              })}
            </select>

            <select
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={toFromCurrency}
              onChange={(e) => setToFromCurrency(e.target.value)}
            >
              {currencies.map((currency) => {
                return <option key={currency}>{currency}</option>;
              })}
            </select>
          </div>

          <div className="mb-6">
            <input
              type="number"
              placeholder="Result"
              value={result}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              readOnly
            />
          </div>

          {/* <div className="text-center">
            <button
              className="bg-orange-500 text-white font-medium rounded-md px-6 py-2 hover:bg-indigo-700 transition cursor-pointer  duration-300 hover:scale-110"
              // onClick={exchange}
            >
              CONVERT
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Currency;
