import React from "react";
import { styled } from "styled-components";
import reactImg from "./img/react.png";

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
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 350px;
  height: 300px;
  background-color: #1c1e27;
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 12px;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 75px;
  filter: drop-shadow(4px 4px 2px #854ce6);
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Umiejętności</Title>
        <SkillsContainer>
          {" "}
          <Skill>
            <SkillTitle>FrontEnd</SkillTitle>
            {/* <SkillList>
              <SkillItem>
                
              </SkillItem>
            </SkillList> */}
            <SkillImage src={reactImg} alt="react" />
          </Skill>
          <Skill>
            <SkillTitle>BackEnd</SkillTitle>
            {/* <SkillList>
              <SkillItem>
                <SkillImage src="" alt="" />
              </SkillItem>
            </SkillList> */}
          </Skill>
          <Skill>
            <SkillTitle>Others</SkillTitle>
            {/* <SkillList>
              <SkillItem>
                <SkillImage src="" alt="" />
              </SkillItem>
            </SkillList> */}
          </Skill>
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
