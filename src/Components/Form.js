import React from "react";
import { useContext } from "react";
import MainContext from "../Context/MainContext";
import axios from "axios";
import { useState, useEffect } from "react";
const Form = () => {
  const api = " https://api.shrtco.de/v2/shorten?url=";

  const { link, setLink, shortLink, setShortLink, linkArray, setLinkArray } =
    useContext(MainContext);

  const [apiData, setApiData] = useState();
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    // if the shortLink is not empty
    if (apiData) {
      // then get the shortLink from the api
      axios // axios is a promise
        .get(apiData)
        .then((res) => {
          // if the shortLink is not empty
          if (res) {
            // then set the shortLink to the shortLink from the api
            setShortLink(res.data);
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [apiData]);
  useEffect(() => {
    if (shortLink) {
      setLinkArray((prev) => [...prev, shortLink]);
    }
  }, [shortLink]);
  const inputHandler = (e) => {
    const input = e.target.value;
    setLink(input);
    if (link !== "") {
      setEmpty(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setApiData(`${api}${link}`);
    if (link == "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    setLink("");
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <input
          className={empty ? "form-input empty" : "form-input"}
          type="text"
          value={link}
          placeholder="Shorten a link here..."
          onChange={inputHandler}
        />
        {empty && <p className="empty-error">Please add a link</p>}
        <input
          className="form-btn"
          type="submit"
          value="Shorten It!"
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

export default Form;
