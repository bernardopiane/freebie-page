import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Phone from "../images/Phone copy 4.png";
import FeatureItem from "./FeatureItem";
import Text from "./Text";
import Title from "./Title";

import AppIcon from "../images/1.png";
import UxIcon from "../images/2.png";
import CloudIcon from "../images/3.png";
import CostumerIcon from "../images/4.png";
import styled from "styled-components";
import MyButton from "./MyButton";

const Wrapper = styled.div`
  display: flex;
  padding: 3em 0;
`;

const ItemArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ". ." ". .";
  grid-gap: 0 1em;
  margin: 3em 0;
  /* @media (max-width: 1200px) {
    padding: 0 5em;
  } */
`;

// const MyRow = styled(Row)`
//   overflow: hidden;
//   display: flex;
//   align-items: center;
// `;

// const MyCol = styled(Col)`
//   position: relative;
//   right: -70px;
//   @media (max-width: 1200px) {
//     display: none;
//   }
// `;

// const CenterCol = styled(Col)`
//   @media (max-width: 1200px) {
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//   }
//   > * {
//     margin-bottom: 2em;
//   }
// `;

const MyImage = styled(Image)`
@media(max-width: 1300px){
  display: none;
}
`;

export default function Ultimate() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xl={{offset: 3}}>
            <div>
              <Title>Ultimate features that we built</Title>
              <Text>
                The rise of mobile devices transforms the way we consume
                information entirely.
              </Text>
            </div>
            <ItemArea>
              <FeatureItem
                icon={AppIcon}
                vertical
                title="App Development"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#ffecef"}
              />
              <FeatureItem
                icon={UxIcon}
                vertical
                title="UX Planing"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#e4ffee"}
              />
              <FeatureItem
                icon={CloudIcon}
                vertical
                title="Cloud Storage"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#fff6d3"}
              />
              <FeatureItem
                icon={CostumerIcon}
                vertical
                title="Customer Support"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#f4f4ff"}
              />
            </ItemArea>
            <MyButton title={"See all"} />
          </Col>
        </Row>
      </Container>
      {/* <Container fluid>
        <MyRow>
          <CenterCol xl={{ offset: 2 }}>
            <div>
              <Title>Ultimate features that we built</Title>
              <Text>
                The rise of mobile devices transforms the way we consume
                information entirely.
              </Text>
            </div>
            <ItemArea>
              <FeatureItem
                icon={AppIcon}
                vertical
                title="App Development"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#ffecef"}
              />
              <FeatureItem
                icon={UxIcon}
                vertical
                title="UX Planing"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#e4ffee"}
              />
              <FeatureItem
                icon={CloudIcon}
                vertical
                title="Cloud Storage"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#fff6d3"}
              />
              <FeatureItem
                icon={CostumerIcon}
                vertical
                title="Customer Support"
                text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                bgColor={"#f4f4ff"}
              />
            </ItemArea>
            <MyButton title={"See all"} />
          </CenterCol>
          <MyCol lg={5}>
            <Image src={Phone} fluid />
          </MyCol>
        </MyRow>
      </Container> */}
      <MyImage src={Phone} fluid />
    </Wrapper>
  );
}
