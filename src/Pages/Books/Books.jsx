// @ts-nocheck
import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // }, []);

  // const bookPromise = fetch("booksData.json").then((res) => res.json());
  return (
    <div className="text-3xl text-center p-6">
      <h1>All Books </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10">
        <Suspense fallback={<span>Loading .....</span>}>
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
