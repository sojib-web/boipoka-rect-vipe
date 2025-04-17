// @ts-nocheck
import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookIdParseInt = parseInt(bookId, 10);
  console.log(bookIdParseInt);
  const data = useLoaderData();
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookIdParseInt);
  console.log(singleBook);
  const { image, bookName } = singleBook;
  return (
    <div>
      <h1>{bookName}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default BookDetails;
