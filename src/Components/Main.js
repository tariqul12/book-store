import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import people from "./../images/people.jpg";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";

const Main = () => {
  const [search, SetSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyAz_nyPr_VQeYAn11McjFcyeqdea4JzyIM" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Fine Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book"
              value={search}
              onChange={(e) => SetSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <img src={people} alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
