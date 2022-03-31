import React, { useState } from "react";
import { createContext } from "react";

const MainContext = createContext();
export function ContextProvider({ children }) {
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState();
  const [linkArray, setLinkArray] = useState([]);
  return (
    <MainContext.Provider
      value={{
        link,
        setLink,
        shortLink,
        setShortLink,
        linkArray,
        setLinkArray,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
