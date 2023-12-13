import React, { useState } from "react";
import {} from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { styled } from "styled-components";
import { HiFire } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/data";

const Nav = styled.div`
  background-color: #1c1e27;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: white;
  marginbottom: 20;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #854ce6;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &: hover {
    color: #854ce6;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LanguageButton = styled.div``;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: #1c1e27;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled.a`
  color: #f2f3f4;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #854ce6;
  }
`;

const GitHubButton = styled.a`
  border: 1.8px solid #854ce6;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: purple;
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavConatiner>
        <NavLogo to="/">
          <HiFire size="3rem" /> <Span>Dawid Urbaniak</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">O mnie</NavLink>
          <NavLink href="#skills">Umiejętności</NavLink>
          <NavLink href="#projects">Projekty</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        </NavItems>
        <ButtonContainer>
          <LanguageButton></LanguageButton>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavConatiner>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            O mnie
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Umiejętności
          </MobileMenuLinks>
          {/* <MobileMenuLinks
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Experience
          </MobileMenuLinks> */}
          <MobileMenuLinks
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projekty
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#contact"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Kontakt
          </MobileMenuLinks>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: "",
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
