// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";
const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    console.log(convertedStoredBooks);
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPage = [...readList];
    }
    if (type === "rating") {
    }
  };
  return (
    <div
      className="
    mt-20 mb-20"
    >
      <details className="dropdown ">
        <summary className="btn m-1 rounded-none">
          sort by : {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages </a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Books List </Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
