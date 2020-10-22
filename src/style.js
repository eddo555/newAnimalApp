import styled from "styled-components";

const Style = styled.div`
  .background-wrapper {
    width: 100%100%;
    height: 100vh;
    border: solid black;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);
  }
  .sky {
    background-color: #c2f9ff;
    grid-column: 1/11;
    grid-row: 1/8;
  }
  .cloud-wrapper {
    grid-column: 1/11;
    grid-row: 1/6;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .cloud {
    width: 10vw;

    animation: cloudAnimation 80s linear infinite;
  }
  .cloud:nth-child(2) {
    width: 20vw;
    animation: cloudAnimation 120s linear infinite;
  }

  @keyframes cloudAnimation {
    from {
      transform: translateX(-5vw);
    }
    to {
      transform: translatex(110vw);
    }
  }

  .grass {
    background-color: #47be37;
    grid-column: 1/11;
    grid-row: 8/11;
  }
  main {
    grid-column: 2/10;
    grid-row: 4/10;
    z-index: 2;
  }
  .animal-wrapper {
    width: 100%;
    height: 65%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }
  .animal {
    width: 10vw;
    animation: animalAnimationReverse 2s 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
  .animal-clicked {
    animation: animalAnimation 2s 1;
    animation-fill-mode: forwards;
  }

  @keyframes animalAnimation {
    0% {
      transform: translateY();
      width: 20%;
    }
    10% {
      transform: translateY(-5vh);
    }
    100% {
      transform: translateY(30vh);
      width: 10%;
    }
  }
  @keyframes animalAnimationReverse {
    0% {
      transform: translateY(30vh);
      width: 10%;
    }
    100% {
      transform: translateY();
      width: 20%;
    }
  }
`;

export { Style };
