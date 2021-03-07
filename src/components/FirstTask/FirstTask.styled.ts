import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 50px;
  display: flex;

  @media all and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  position: fixed;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: calc(100vh - 50px);
  padding: 20px 0;

  @media all and (max-width: 1000px) {
    position: static;
    top: 0;
    width: 100%;
    height: max-content;
  }
`;
