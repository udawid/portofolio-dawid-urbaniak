import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;

  // @media screen and (max-width: 768px) {
  //   flex-direction: column;
  // }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: white;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Project = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projekty</Title>
        <Desc>Lorem ipsum lorem ipsum lorem</Desc>
      </Wrapper>
    </Container>
  );
};

export default Project;
