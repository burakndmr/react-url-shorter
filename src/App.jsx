import "./App.css";
import { useContext, useState } from "react";
import MainContext from "./Context/MainContext";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const { link, setLink, shortLink, setShortLink, linkArray, setLinkArray } =
    useContext(MainContext);
  const api = " https://api.shrtco.de/v2/shorten?url=";

  const [apiData, setApiData] = useState();

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

    console.log(link);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setApiData(`${api}${link}`);
    setLink("");
    console.log(linkArray);
  };
  console.log("shortlink", shortLink);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={link} onChange={inputHandler} />
        <input type="submit" value="Shorten It!" onClick={submitHandler} />
      </form>

      {linkArray.map((item, index) => (
        <a key={index} href={item.result.full_short_link} target="_blank">
          {item.result.full_short_link}
        </a>
      ))}
    </div>
  );
}
export default App;
