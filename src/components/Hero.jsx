import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FaRegCheckCircle } from "react-icons/fa";
import MyButton from "./MyButton";
import Phone from "../images/phoneAlt.png";
import BG from "../images/bg.png";

const Wrapper = styled.div`
  background-color: #fdfdfe;
  font-family: "Poppins", sans-serif;
  background-image: url(${BG});
  /* background-size: cover; */
  background-repeat: repeat-x;
  background-position: bottom;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 600px;
`;

const FlexBlock = styled.div`
  flex: 1 1 0px;
  :last-child {
    display: flex;
    justify-content: end;
    @media (max-width: 800px) {
      display: none;
    }
    @media (max-width: 1000px) {
      position: absolute;
      right: -35vw;
      transition: all 125ms ease;
      :hover {
        right: -5vw;
      }
    }
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  background-color: #e2eaed;
  border-radius: 17.5px;
`;

const BadgeIcon = styled.div`
  background-color: #feaa25;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45em;
`;

const BadgeText = styled.div`
  padding: 0.25em 3em 0.25em 0.5em;
`;

const HeroText = styled.div`
  font-size: 60px;
`;

const SubText = styled.div`
  margin: 1em 0 1em 0;
  color: #616368;
  font-size: 18px;
`;

const LinkArea = styled.div`
  color: #2500f9;
  display: flex;
  align-items: center;
  div {
    margin-left: 1em;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          <FlexBlock>
            <Badge>
              <BadgeIcon>
                <FaRegCheckCircle />
              </BadgeIcon>
              <BadgeText>#1 Editiors Choice App of 2020</BadgeText>
            </Badge>
            <HeroText>Best app for your modern lifestyle</HeroText>
            <SubText>
              Increase productivity with a simple to-do app. app for managing
            </SubText>
            <LinkArea>
              <MyButton title="Try for free" />
              <div>Watch demo video</div>
            </LinkArea>
          </FlexBlock>
          <FlexBlock>
            <Image src={Phone} fluid alt="" />
          </FlexBlock>
        </Content>
      </Container>
    </Wrapper>
  );
}
