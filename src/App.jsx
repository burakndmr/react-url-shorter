import MainContext from "./Context/MainContext";
import { useContext, useState } from "react";
import Form from "./Components/Form";
import LinkItem from "./Components/LinkItem";
import Header from "./Components/Header";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
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
        <GetStarted />
      </section>
      <Footer />
    </div>
  );
}
export default App;
