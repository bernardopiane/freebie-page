import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import DesignImage from "../images/designed.png";
import MyButton from "./MyButton";
import Title from "./Title";

const Wrapper = styled.div`
  padding: 3em 0;
  display: flex;
  margin-left: 15em;
  margin-right: 15em;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  align-items: center;
  text-align: start;
  @media (max-width: 1400px) {
    margin: 0;
  }
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const MyImage = styled(Image)`
  /* margin-right: 3em; */
  @media (max-width: 1400px) {
    display: none;
  }
`;

const Content = styled.div`
  /* margin: 0 5em; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 1400px) {
    max-width: 400px;
  }

  @media (max-width: 1200px) {
    margin: 0 5em;
  }
`;

const Text = styled.div`
  color: #616368;
  margin: 2em 0;
`;

const MyCol = styled(Col)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CenterCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export default function Designed() {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <MyCol lg={{ offset: 1, span: 4 }}>
            <MyImage src={DesignImage} fluid />
          </MyCol>
          <CenterCol>
            <Content>
              <Title>Designed & built by the latest code integration</Title>
              <Text>
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </Text>
              <MyButton title="Learn more" />
            </Content>
          </CenterCol>
        </Row>
      </Container>
    </Wrapper>
  );
}
