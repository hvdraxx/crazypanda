import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  text-align: center;
`;
export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 1.6rem;

  @media all and (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
export const Input = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Dolores occaecati...",
}))`
  width: 100%;
  margin-bottom: 25px;
  padding: 10px;
  outline: none;
  border: 1px solid #afafaf;
  border-radius: 3px;
  background-color: #f0f0f0;
  transition: 0.2s;

  &:hover,
  &:focus {
    border-color: #808080;
    background-color: #fff;
  }

  @media all and (max-width: 1000px) {
    margin-bottom: 15px;
  }
`;

export const Nothing = styled.h2`
  font-size: 1.3rem;
  color: #090909;

  @media all and (max-width: 1000px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;
