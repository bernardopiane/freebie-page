import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import Text from "./Text";
import Title from "./Title";
import Icon1 from "../images/1.png";
import Icon2 from "../images/2.png";
import Icon3 from "../images/3.png";
import Icon4 from "../images/4.png";
import Icon5 from "../images/5.png";
import Icon6 from "../images/6.png";

const Wrapper = styled.div`
  padding: 3em 0;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemArea = styled.div`
  display: flex;
  gap: 1em 1em;
  flex-wrap: wrap;
  justify-content: center;
`;

const TextPad = styled.div`
  padding: 2em 0;
`;

export default function ChooseApp() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Center>
            <Title center>Why you should choose our app</Title>
            <TextPad>
              <Text center>
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </Text>
            </TextPad>
          </Center>
        </Header>
        <ItemArea>
          <FeatureItem
            maxWidth="350px"
            icon={Icon1}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="App Development"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#ffecef"
          />
          <FeatureItem
            maxWidth="350px"
            icon={Icon2}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="10 Times Award"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#eaf9ff"
          />
          <FeatureItem
            maxWidth="350px"
            icon={Icon3}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="Cloud Storage"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#fff6d3"
          />
          <FeatureItem
            maxWidth="350px"
            icon={Icon4}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="Customization"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#e4ffee"
          />
          <FeatureItem
            maxWidth="350px"
            icon={Icon5}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="UX Planning"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#f4f4ff"
          />
          <FeatureItem
            maxWidth="350px"
            icon={Icon6}
            vertical={true}
            center={true}
            descpWidth="300px"
            title="Customer Support"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            bgColor="#fdeee4"
          />
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
