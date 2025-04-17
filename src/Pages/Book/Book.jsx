import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";
const Book = ({ singleBook }) => {
  const {
    bookName,
    category,
    image,
    tags,
    rating,
    yearOfPublishing,
    publisher,
    review,
    bookId,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm p-6">
        <figure className="h-[200px] overflow-hidden bg-gray-100 p-5">
          <img
            className="object-cover rounded-xl w-full h-full"
            src={image}
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <div className="flex flex-wrap justify-star gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn text-[#23BE0A]  border-none bg-[#23BE0A0D]"
              >
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title mt-4 flex flex-wrap justify-between items-center gap-2">
            <span className=" font-semibold text-2xl">{bookName}</span>
            <div className="badge badge-secondary whitespace-nowrap">
              {yearOfPublishing}
            </div>
          </h2>
          <h4 className="text-start text-sm">By: {publisher}</h4>

          <p className="text-start mt-5 line-clamp-2">{review}</p>
          <div className="card-actions justify-between mt-5">
            <div className=" text-2xl">{category}</div>
            <div className=" flex items-center text-2xl gap-1">
              {rating}
              <IoIosStarHalf />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
