// @ts-nocheck
import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-2xl  mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse lg:p-16">
        <img
          src={bookImage}
          alt="Books"
          className="max-w-sm w-50 lg:w-full rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="lg:text-5xl font-bold mb-10">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn text-2xl rounded-2xl p-8 bg-[#23BE0A] text-white ">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
