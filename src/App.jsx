import { useContext, useState } from "react";
import MainContext from "./Context/MainContext";
import axios from "axios";
import { useEffect } from "react";
import Form from "./Components/Form";
import LinkItem from "./Components/LinkItem";

import Header from "./Components/Header";
import Detailed from "./Components/Detailed";
function App() {
  const { shortLink, linkArray } = useContext(MainContext);

  return (
    <div className="App">
      <Header />
      <section>
        <div className="content-container">
          <Form />
          <div className="links-container">
            {shortLink &&
              linkArray.map((item, index) => (
                <LinkItem key={index} link={item.result} />
              ))}
          </div>
        </div>
      </section>
      <section>
        <Detailed />
      </section>
    </div>
  );
}
export default App;
