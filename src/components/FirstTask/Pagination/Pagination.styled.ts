import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-top: 1px solid #b2b2b2;
  border-bottom: 1px solid #b2b2b2;
  border-right: 1px solid #b2b2b2;
  color: #5f5f5f;
  font-size: 1.1rem;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #090909;
    background-color: #d5d5d5;
  }

  &.active {
    color: #090909;
    background-color: #d5d5d5;
  }

  @media all and (max-width: 1360px) {
    width: 30px;
    height: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  & li > * {
    font-size: 1.1rem;
  }

  & li:first-child {
    border-left: 1px solid #b2b2b2;
  }

  & li:first-child ${Button}, & li:last-child ${Button} {
    font-size: 1.3rem;
  }

  & li:first-child ${Button}:hover, & li:last-child ${Button}:hover {
    color: #090909;
    background-color: #b5b5b5;
  }

  @media all and (max-width: 1360px) {
    & li > * {
      font-size: 0.9rem;
    }
  }
`;
