import { useContext, useState } from "react";
import MainContext from "./Context/MainContext";
import Form from "./Components/Form";
import LinkItem from "./Components/LinkItem";
import Header from "./Components/Header";
import Details from "./Components/Details";
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
        <Details />
      </section>
    </div>
  );
}
export default App;
