import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import TrialImage from "../images/trial.png";
import GoogleImage from "../images/google.png";
import AppleImage from "../images/apple.png";
import Text from "./Text";

const Wrapper = styled.div`
  padding: 3em 0;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const MyImage = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }
  z-index: 1;
  position: relative;
  bottom: -100px;
`;

const Header = styled.div`
  font-size: 48px;
  color: #242f51;
  font-weight: bold;
`;

const StoreArea = styled.div`
  padding: 3em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > img {
    margin: 1em;
    cursor: pointer;
  }
  /* justify-content: space-around; */
`;

export default function Trial() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xl={{ offset: 3 }}>
            <Header>Download our app</Header>
            <Text>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </Text>
            <StoreArea>
              <Image src={GoogleImage} fluid />
              <Image src={AppleImage} fluid />
            </StoreArea>
          </Col>
        </Row>
      </Container>
      <MyImage fluid src={TrialImage} />
    </Wrapper>
  );
}
