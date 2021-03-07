import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  background-color: #7d7d7d;
  z-index: 10;

  @media all and (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const Button = styled.button`
  height: 100%;
  padding: 0 25px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #6b6b6b;
  }
`;
