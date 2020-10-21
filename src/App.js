import React from "react";
import { Style } from "./style";
import Animal from "./animal";
import Cloud from "./assets/cloud.png";

function App() {
  return (
    <div>
      <Style>
        <div className="background-wrapper">
          <div className="sky"></div>
          <div className="cloud-wrapper">
            <img className="cloud" src={Cloud} alt="cloud" />
            <img className="cloud" src={Cloud} alt="cloud" />
          </div>
          <div className="grass"></div>
          <main>
            <div className="animal-wrapper">
              <Animal animal="Dog" />
              <Animal animal="Cat" />
              <Animal animal="Cow" />
              <Animal animal="Pig" />
            </div>
          </main>
        </div>
      </Style>
    </div>
  );
}

export default App;
