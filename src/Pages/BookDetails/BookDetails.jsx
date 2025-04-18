// @ts-nocheck
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookIdParseInt = parseInt(bookId);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookIdParseInt);

  const {
    image,
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    rating,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (bookId) => {
    addToStoredDB(bookId);
  };

  return (
    <div className="w-2/3 mx-auto flex  gap-10 mt-20 mb-20">
      <div className="bg-[#1313130D] p-10 ">
        <img className=" " src={image} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className="text-[#131313] text-3xl">{bookName}</h1>
        <p className="text-xl">
          <small>By:{author} </small>
        </p>
        <p>
          Review : <small>{review}</small>
        </p>
        <div>
          <h2 className="text-[#131313] text-2xl">
            Tags:
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn text-[#23BE0A]  border-none bg-[#23BE0A0D]"
              >
                {tag}
              </button>
            ))}
          </h2>
          <h3>Number of Pages: {totalPages}</h3>
          <h3>Publisher: {publisher}</h3>
          <h3>Year of Publishing: {yearOfPublishing}</h3>
          <h3>Rating: {rating}</h3>
        </div>
        <button onClick={() => handleMarkAsRead(bookId)} className="btn mr-5">
          Read
        </button>
        <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
