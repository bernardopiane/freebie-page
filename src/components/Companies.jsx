import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import image1 from "../images/comp1.png";
import image2 from "../images/comp2.png";
import image3 from "../images/comp3.png";
import image4 from "../images/comp4.png";
import image5 from "../images/comp5.png";

const Wrapper = styled.div`
  padding: 3em 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const Text = styled.div`
  color: #242f51;
  padding-bottom: 3em;
`;

const CompanyArea = styled.div`
  display: flex;
  gap: 3em 3em;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  img {
    margin: 0 1em;
  }
`;

export default function Companies() {
  return (
    <Wrapper>
      <Container>
        <Text>Trusted by companies like</Text>
        <CompanyArea>
          <Image src={image1} alt="" fluid />
          <Image src={image2} alt="" fluid />
          <Image src={image3} alt="" fluid />
          <Image src={image4} alt="" fluid />
          <Image src={image5} alt="" fluid />
        </CompanyArea>
      </Container>
    </Wrapper>
  );
}
