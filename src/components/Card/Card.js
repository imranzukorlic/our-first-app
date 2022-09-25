import React from "react";
import star from "./star.png";

const Card = ({ image, title, price, text }) => {
  return (
    <div className="w-60 px-6 h-3/5 bg-white rounded py-6 transform transition-all hover:translate-y-2">
      <img className="h-50 object-cover " src={image} alt="slika" />
      <div className="p-2"></div>
      <h2 className="font-bold text-lg ml-10"> {title} </h2>
      <p className="text text-gray-600 text-center ">{text}</p>
      <div className="m-2"></div>
      <span className="flex items-center ml-23  mt-4 ">
        <img src={star} className="h-3 px-1 " alt="slika"></img>
        <img src={star} className="h-3 px-1" alt="slika"></img>
        <img src={star} className="h-3 px-1" alt="slika"></img>
      </span>
      <div className="flex justify-between">
        <button className="bg-sky-400 px-4 py-1 h-30 w-30 ease-in duration-200 hover:bg-violet-600 text-white rounded mt-3 ml-1 ">
          Add to cart
        </button>
        <p className="px-4 py-2 text-black-300 rounded mt-3 ">$ {price}</p>
      </div>
    </div>
  );
};
export default Card;
