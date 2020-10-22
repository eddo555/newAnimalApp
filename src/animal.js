import React, { useContext } from "react";
import { AnimalContext } from "./animalContext";

const Animal = ({ animal }) => {
  const {
    toggleAnimal,
    isDogClicked,
    isCatClicked,
    isCowClicked,
    isPigClicked,
    Dog,
    Cat,
    Cow,
    Pig,
  } = useContext(AnimalContext);
  if (animal === "Dog") {
    return isDogClicked ? (
      <img
        className="animal-clicked"
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
        className="animal-clicked"
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
        className="animal-clicked"
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
        className="animal-clicked"
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
