import styled from "styled-components";

const Style = styled.div`
  .background-wrapper {
    width: 100%100%;
    height: 100vh;
    border: solid black;

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
    border: solid black;
    grid-column: 1/11;
    grid-row: 1/6;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .cloud {
    border: solid black 1px;
    width: 10vw;
  }
  .cloud:nth-child(2) {
    width: 20vw;
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

    border: solid red;
  }
  .animal-wrapper {
    border: solid green;
    width: 100%;
    height: 65%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }
  .animal {
    border: solid yellow;
    width: 10vw;
    cursor: pointer;
  }
`;

export { Style };
