import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mt-10">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Boi Poka</a>
      </div>

      <div className="navbar-center  lg:flex">
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/about">
          About
        </Link>
        <Link className="btn btn-ghost text-xl" to="/readList">
          Read List
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#23BE0A] text-white rounded-2xl ">
          Sign In
        </button>

        <button className="btn bg-[#59C6D2] text-white rounded-2xl ml-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
