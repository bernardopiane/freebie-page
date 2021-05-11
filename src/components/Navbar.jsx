import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./Logo";
import MyButton from "./MyButton";

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LinkArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #242f51;
  div{
    margin-bottom: 1em;
  }
  div:not(:last-child) {
    margin-right: 1em;
  }
  div:last-child {
    margin-left: 1em;
  }
`;



export default function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo />
          <LinkArea>
            <div>Home</div>
            <div>Key Features</div>
            <div>Pricing</div>
            <div>Testimonials</div>
            <div>FAQ</div>
            <div>
              <MyButton title="Try for free" />
            </div>
          </LinkArea>
        </Content>
      </Container>
    </Wrapper>
  );
}
