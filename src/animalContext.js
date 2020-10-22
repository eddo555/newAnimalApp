import React, { createContext, useState } from "react";

import Bark from "./assets/dog.mp3";
import Meow from "./assets/cat.mp3";
import Moo from "./assets/cow.mp3";
import Squeel from "./assets/pig.mp3";

import Dog from "./assets/dog.png";
import Cat from "./assets/cat.png";
import Cow from "./assets/cow.png";
import Pig from "./assets/pig.png";

const AnimalContext = createContext();

function AnimalContextProvider(props) {
  const [isDogClicked, setIsDogClicked] = useState(false);
  const [isCatClicked, setIsCatClicked] = useState(false);
  const [isCowClicked, setIsCowClicked] = useState(false);
  const [isPigClicked, setIsPigClicked] = useState(false);

  function toggleAnimal(value) {
    if (value === "dog") {
      setIsDogClicked(!isDogClicked);
      audioToggle(Bark);
    }
    if (value === "cat") {
      setIsCatClicked(!isCatClicked);
      audioToggle(Meow);
    }
    if (value === "cow") {
      setIsCowClicked(!isCowClicked);
      audioToggle(Moo);
    }
    if (value === "pig") {
      setIsPigClicked(!isPigClicked);
      audioToggle(Squeel);
    }
  }

  function audioToggle(input) {
    const audio = new Audio(input);

    audio.play();
  }

  return (
    <AnimalContext.Provider
      value={{
        toggleAnimal,
        isDogClicked,
        isCatClicked,
        isCowClicked,
        isPigClicked,
        Dog,
        Cat,
        Cow,
        Pig,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
}

export { AnimalContext, AnimalContextProvider };
