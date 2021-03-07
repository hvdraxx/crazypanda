import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 255px;
  height: 100px;
  margin-right: 50px;

  @media all and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
    width: 300px;
  }

  & input {
    background-color: transparent;
    -webkit-appearance: none;
  }
  & input:focus {
    outline: none;
  }
  /* first input webkit */
  & input:nth-child(1)::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #cd0000;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(1)::-webkit-slider-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  & input:focus::-webkit-slider-thumb {
    background: #fff;
  }

  & input:nth-child(1):focus::-webkit-slider-runnable-track {
    background: red;
  }

  /* second input webkit */
  & input:nth-child(2)::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: green;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(2)::-webkit-slider-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  & input:focus::-webkit-slider-thumb {
    background: #fff;
  }
  & input:nth-child(2):focus::-webkit-slider-runnable-track {
    background: #00cd00;
  }

  /* third input webkit */
  & input:nth-child(3)::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #0000cd;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(3)::-webkit-slider-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  & input:focus::-webkit-slider-thumb {
    background: #fff;
  }
  & input:nth-child(3):focus::-webkit-slider-runnable-track {
    background: blue;
  }

  /* first input moz */
  & input:nth-child(1)::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #cd0000;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(1)::-moz-range-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    margin-top: -6px;
  }
  & input:focus::-moz-range-thumb {
    background: #fff;
  }

  & input:nth-child(1):focus::-moz-range-track {
    background: red;
  }

  /* second input moz */
  & input:nth-child(2)::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: green;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(2)::-moz-range-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    margin-top: -6px;
  }
  & input:focus::-moz-range-thumb {
    background: #fff;
  }

  & input:nth-child(2):focus::-moz-range-track {
    background: #00cd00;
  }

  /* third input moz */
  & input:nth-child(3)::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #0000cd;
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  & input:nth-child(3)::-moz-range-thumb {
    border: 1px solid #000000;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #cdcdcd;
    cursor: pointer;
    margin-top: -6px;
  }
  & input:focus::-moz-range-thumb {
    background: #fff;
  }

  & input:nth-child(3):focus::-moz-range-track {
    background: blue;
  }
`;
