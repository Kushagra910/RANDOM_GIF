import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {

  const {gif,loading,fetchData} = useGif();
  function clickHandler() {
    fetchData();
  };

  return (
    <div className="w-1/2 bg-green-500 border rounded-xl border-black 
    flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="text-sm sm:text-lg md:text-xl uppercase underline font-bold text-slate-800 text-shadow">A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt="Error Occurred"/>) 
      }
      <button onClick={clickHandler} 
      className="bg-white w-10/12 text-lg py-2 rounded-xl mb-[40px]
      bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400  text-white font-bold r shadow-lg transition duration-300 ease-in-out transform hover:scale-110">Generate</button>
    </div>
  );
}
