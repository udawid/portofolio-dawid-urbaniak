import React from "react";
import { styled } from "styled-components";
import HomeImage from "../../images/programmer.png";
import HomeBgAnimation from "../HomeBgAnimation/Index";

const HomeContainer = styled.div`
  background-color: #1c1e2d;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HomeBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 65%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

const HomeInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HomeLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HomeRightContainer = styled.div`
  display: flex;
  width: 100%;
  order: 2;
  justify-content: flex-end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: white;
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: white;
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  // max-width: 400px;
  // max-height: 400px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Home = () => {
  return (
    <div id="about">
      <HomeContainer>
        <HomeBg>
          <HomeBgAnimation />
        </HomeBg>
        <HomeInnerContainer>
          <HomeLeftContainer>
            <Title>
              Cześć, jestem <b>Dawid!</b>
            </Title>
            <SubTitle>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsum
            </SubTitle>
          </HomeLeftContainer>
          <HomeRightContainer>
            <Image src={HomeImage} alt="Home" />
          </HomeRightContainer>
        </HomeInnerContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
