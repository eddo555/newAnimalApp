import React, { useContext } from "react";

import { AnimalContext } from "./animalContext";

import Dog from "./assets/dog.png";
import Cat from "./assets/cat.png";
import Cow from "./assets/cow.png";
import Pig from "./assets/pig.png";

const clickedStyle = {
  border: "solid black",
  //animation
  //separate state from isactive to each animal
};

const Animal = ({ animal }) => {
  const {
    toggleAnimal,
    isDogClicked,
    isCatClicked,
    isCowClicked,
    isPigClicked,
  } = useContext(AnimalContext);
  if (animal === "Dog") {
    return isDogClicked ? (
      <img
        className="animal"
        style={clickedStyle}
        src={Dog}
        alt="dog"
        onClick={() => toggleAnimal("dog")}
      />
    ) : (
      <img
        className="animal"
        src={Dog}
        alt="dog"
        onClick={() => toggleAnimal("dog")}
      />
    );
  }
  if (animal === "Cat") {
    return isCatClicked ? (
      <img
        className="animal"
        style={clickedStyle}
        src={Cat}
        alt="cat"
        onClick={() => toggleAnimal("cat")}
      />
    ) : (
      <img
        className="animal"
        src={Cat}
        alt="cat"
        onClick={() => toggleAnimal("cat")}
      />
    );
  }
  if (animal === "Cow") {
    return isCowClicked ? (
      <img
        className="animal"
        style={clickedStyle}
        src={Cow}
        alt="cow"
        onClick={() => toggleAnimal("cow")}
      />
    ) : (
      <img
        className="animal"
        src={Cow}
        alt="cow"
        onClick={() => toggleAnimal("cow")}
      />
    );
  }
  if (animal === "Pig") {
    return isPigClicked ? (
      <img
        className="animal"
        style={clickedStyle}
        src={Pig}
        alt="pig"
        onClick={() => toggleAnimal("pig")}
      />
    ) : (
      <img
        className="animal"
        src={Pig}
        alt="pig"
        onClick={() => toggleAnimal("pig")}
      />
    );
  }
};

export default Animal;
