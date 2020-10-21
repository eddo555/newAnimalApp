import React, { createContext, useState } from "react";

const AnimalContext = createContext();

function AnimalContextProvider(props) {
  const [isDogClicked, setIsDogClicked] = useState(false);
  const [isCatClicked, setIsCatClicked] = useState(false);
  const [isCowClicked, setIsCowClicked] = useState(false);
  const [isPigClicked, setIsPigClicked] = useState(false);

  function toggleAnimal(value) {
    if (value === "dog") {
      setIsDogClicked(!isDogClicked);
    }
    if (value === "cat") {
      setIsCatClicked(!isCatClicked);
    }
    if (value === "cow") {
      setIsCowClicked(!isCowClicked);
    }
    if (value === "pig") {
      setIsPigClicked(!isPigClicked);
    }
  }

  return (
    <AnimalContext.Provider
      value={{
        toggleAnimal,
        isDogClicked,
        isCatClicked,
        isCowClicked,
        isPigClicked,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
}

export { AnimalContext, AnimalContextProvider };
