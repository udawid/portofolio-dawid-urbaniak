import React from "react";
import { styled } from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/data";
import Weather from "../Weather/Weather";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.66) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0 100px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 60px;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Project = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projekty</Title>
        <Desc>
          Zapraszam do zapoznania się z moimi dotychczasowymi projektami.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
        <Title>Sprawdź pogodę dla swojego miasta</Title>
        <Weather />
      </Wrapper>
    </Container>
  );
};

export default Project;
