import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: black;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &: hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-tems: center;
`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: white;
  background-color: purple;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  padding: 0 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: white;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
      </Details>
    </Card>
  );
};

export default ProjectCard;
