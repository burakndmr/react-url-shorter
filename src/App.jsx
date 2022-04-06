import { useContext, useState } from "react";
import MainContext from "./Context/MainContext";
import axios from "axios";
import { useEffect } from "react";
import Form from "./Components/Form";
import LinkItem from "./Components/LinkItem";

import Header from "./Components/Header";
function App() {
  const { shortLink, linkArray } = useContext(MainContext);

  return (
    <div className="App">
      <Header />
      <section>
        <Form />

        {shortLink &&
          linkArray.map((item, index) => (
            <LinkItem key={index} link={item.result} />
          ))}
      </section>
    </div>
  );
}
export default App;
