import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import clientImage from "../images/clients.png";
import Text from "./Text";
import Title from "./Title";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

import PersonImage from "../images/person.png";
import Arrow from "./Arrow";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Wrapper = styled.div`
  margin: 6em 0;
  display: flex;
`;

const MyImage = styled(Image)`
  @media (max-width: 1400px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    padding: 0.5em 0;
  }
`;

const TestimonialTitle = styled.div`
  font-size: 20px;
  color: #242f51;
  font-weight: bold;
`;

const TestimonialArea = styled.div`
  > * {
    padding: 0.5em 0;
  }
`;

const ClientArea = styled.div`
  display: flex;
  align-items: center;
  margin: 2em 0;
`;

const ClientDetails = styled.div`
  margin: 0 1em;
  flex: 1;
`;

const ClientName = styled.div`
  color: #242f51;
  font-weight: bold;
  font-size: 18px;
`;

const ClientArrowArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 2em;
  border-right: 1px solid #e7e7e7;
  margin: 0 1em;
`;

export default function Clients() {
  return (
    <Wrapper>
      <MyImage fluid src={clientImage} />
      <Container>
        <Row>
          <Col xl={8} xs={12}>
            <Content>
              <Title>Meet Client Satisfaction by using product</Title>
              <Text>
                The rise of mobile devices transforms the way we consume.
                elevant channels such as Facebook.
              </Text>
              <TestimonialArea>
                <Rate />
                <TestimonialTitle>
                  User friendly & Customizable
                </TestimonialTitle>
                <Text>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </Text>
                <ClientArea>
                  <Image fluid src={PersonImage} />
                  <ClientDetails>
                    <ClientName>Zoltan Nemeth</ClientName>
                    <Text>CEO of Pixler Lab</Text>
                  </ClientDetails>
                  <ClientArrowArea>
                    <Arrow>
                      <IoArrowBack />
                    </Arrow>
                    <Divider />
                    <Arrow>
                      <IoArrowForward />
                    </Arrow>
                  </ClientArrowArea>
                </ClientArea>
              </TestimonialArea>
            </Content>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
