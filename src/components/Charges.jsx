import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import Text from "./Text";
import styled from "styled-components";
import MyButton from "./MyButton";

const Wrapper = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding: 3em 0;
`;

const MyRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PickerArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Picker = styled.div`
  margin: 3em 0;
  display: inline-flex;
  border: 2px solid #ebebeb;
  border-radius: 24px;
  cursor: pointer;
  user-select: none;
`;

const Item = styled.div`
  margin: 0.25em;
  background-color: ${(props) => (props.active ? "#2500f9" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#898a8e")};
  padding: 1em 3em;
  border-radius: 18px;
  transition: all 125ms ease;
`;

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    margin: 1em 2em;
  }
`;

const Card = styled.div`
  border: 1px solid transparent;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: border 125ms ease;
  /* box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0); */
  box-shadow: 0 0 3em 0 rgba(0, 0, 0, 0.15);

  :hover {
    border: 1px solid #ebebeb;
    box-shadow: 0 0 3em 0 rgba(0, 0, 0, 0.25);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  /* height: 250px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 4em;
  border-radius: 8px;
  background: rgb(253, 254, 254);
  background: linear-gradient(
    214deg,
    rgba(253, 254, 254, 1) 0%,
    rgba(244, 247, 249, 1) 100%
  );
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 4em;
  > * {
    margin: 0.5em 0;
  }
`;

const CardPrice = styled.div`
  color: #242f51;
  font-size: 60px;
  font-weight: bold;
  ::before {
    content: "$";
  }
  ::after {
    /* content: ${(props) => (props.annually ? "/ annually" : "/ month")}; */
    content: "/ month";
    font-size: 18px;
    color: #999ca5;
  }
`;

const CardClass = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #242f51;
`;

const CardItem = styled.div`
  color: #999ca5;
`;

const CardLink = styled.div`
  color: #2500f9;
  cursor: pointer;
`;

export default function Charges() {
  const [Monthly, setMonthly] = useState(true);
  return (
    <Wrapper>
      <Container>
        <MyRow>
          <Col xl={8}>
            <Title center>Get awesome features, without extra charges</Title>
            <Text center>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </Text>
          </Col>
        </MyRow>
        <PickerArea>
          <Picker onClick={() => setMonthly(!Monthly)}>
            <Item active={Monthly}>Monthly</Item>
            <Item active={!Monthly}>Annually</Item>
          </Picker>
          <CardArea>
            <Card>
              <CardHeader>
                <CardPrice>0</CardPrice>
                <CardClass>Bussiness Class</CardClass>
                <CardItem>For small teams or office</CardItem>
              </CardHeader>
              <CardBody>
                <CardItem>Drag & Drop Builder</CardItem>
                <CardItem>1,000's of Templates</CardItem>
                <CardItem>Blog Support Tools</CardItem>
                <CardItem>eCommerce Store</CardItem>
                <MyButton title={"Start free trial"} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardPrice>90</CardPrice>
                <CardClass>Pro Master</CardClass>
                <CardItem>For Best opportunities</CardItem>
              </CardHeader>
              <CardBody>
                <CardItem>Drag & Drop Builder</CardItem>
                <CardItem>1,000's of Templates</CardItem>
                <CardItem>Blog Support Tools</CardItem>
                <CardItem>eCommerce Store</CardItem>
                <MyButton title={"Start free trial"} />
                <CardLink>Or Start 14 days trial</CardLink>
              </CardBody>
            </Card>
          </CardArea>
        </PickerArea>
      </Container>
    </Wrapper>
  );
}

// 999ca5
