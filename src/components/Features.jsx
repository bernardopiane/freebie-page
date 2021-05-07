import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import Phone from "../images/features_phone.png";
import FeatureItem from "./FeatureItem";
import SpeedIcon from "../images/speed.png";
import PrototypingIcon from "../images/prototyping.png";
import VectorIcon from "../images/vector.png";
import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  padding: 3em 0;
  /* margin-left: 15em; */
  font-family: "Poppins", sans-serif;
  align-items: center;
`;
const SubText = styled.div`
  color: #616368;
`;

// const MyImage = styled(Image)`
//   padding-left: 15em;
//   @media (max-width: 800px) {
//     display: none;
//   }
//   @media (max-width: 1300px) {
//     /* display: none; */
//     padding-left: 0;

//     position: absolute;
//     left: -35vw;
//     transition: all 125ms ease;
//     :hover {
//       left: -5vw;
//     }
//   }
//   @media (min-width: 1300px) {
//     padding-left: 10vw;
//   }
// `;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const MyCol = styled(Col)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function Features() {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <MyCol xs={12} lg={{ span: 4, offset: 2 }}>
            <Image src={Phone} fluid />
          </MyCol>
          <CenterCol>
            <Title>Awesome apps features</Title>
            <SubText>
              Increase productivity with a simple to-do app. app for managing
            </SubText>
            <FeatureItem
              icon={SpeedIcon}
              title="Fast Performance"
              text="Get your blood tests delivered at home collect a sample from the news your blood tests."
              color="#f55767"
            />
            <FeatureItem
              icon={PrototypingIcon}
              title="Prototyping"
              text="Get your blood tests delivered at home collect a sample from the news your blood tests."
              color="#2563ff"
            />
            <FeatureItem
              icon={VectorIcon}
              title="Vector Editingpho"
              text="Get your blood tests delivered at home collect a sample from the news your blood tests."
              color="#40975f"
            />
          </CenterCol>
        </Row>
      </Container>
      {/* <MyImage src={Phone} />
      <Content>
        <Title>Awesome apps features</Title>
        <SubText>
          Increase productivity with a simple to-do app. app for managing
        </SubText>
        <FeatureItem
          icon={SpeedIcon}
          title="Fast Performance"
          text="Get your blood tests delivered at home collect a sample from the news your blood tests."
          color="#f55767"
        />
        <FeatureItem
          icon={PrototypingIcon}
          title="Prototyping"
          text="Get your blood tests delivered at home collect a sample from the news your blood tests."
          color="#2563ff"
        />
        <FeatureItem
          icon={VectorIcon}
          title="Vector Editingpho"
          text="Get your blood tests delivered at home collect a sample from the news your blood tests."
          color="#40975f"
        />
      </Content> */}
    </Wrapper>
  );
}
