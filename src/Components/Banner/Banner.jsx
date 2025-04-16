// @ts-nocheck
import React from "react";

import bookImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex justify-between items-center p-16">
      <div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <button className="btn  btn-primary">Test</button>
      </div>
      <div>
        <img className="w-3/5" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
