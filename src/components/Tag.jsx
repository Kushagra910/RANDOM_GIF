import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag,setTag] = useState('');
  const {gif,loading,fetchData} = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  };

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-500 border rounded-xl border-black 
    flex flex-col items-center gap-y-5 mt-[15px] mb-[30px] ">
      <h1 className=" text-sm sm:text-lg md:text-xl uppercase underline font-bold text-slate-800 text-shadow">Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt="Error Occurred"/>) 
      }

      <input className="w-10/12 text-lg py-2 rounded-xl text-center mb-[-10px] focus-border-none border border-gray-300 focus:outline-none"
      onChange={changeHandler}
      value={tag}/>
      <button onClick={clickHandler} 
      className="bg-white w-10/12 text-lg py-2 rounded-xl mb-[20px]
      bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400  text-white font-bold r shadow-lg transition duration-300 ease-in-out transform hover:scale-110">Generate</button>
    </div>
  );
}
