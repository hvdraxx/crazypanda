import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SwitchesContainer = styled.div`
  margin-bottom: 30px;
`;
export const Switcher = styled.button`
  padding: 10px;
  outline: none;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background-color: #d5d5d5;
  cursor: pointer;

  &:hover {
    background-color: #afafaf;
  }

  &.active {
    background-color: #afafaf;
    cursor: not-allowed;
  }

  &:first-child {
    margin-right: 30px;
  }

  @media all and (max-width: 768px) {
    &:first-child {
      margin-right: 0;
    }
  }
`;
export const TextContainer = styled.div`
  width: 300px;
  height: max-content;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 4px;
`;
