import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./Logo";

import { FaFacebookF, FaTwitter, FaSlackHash, FaGithub } from "react-icons/fa";

const Wrapper = styled.div`
  padding: 3em 0;
  background-color: #09142e;
  color: white;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const LinkArea = styled.div`
  display: flex;
  padding: 2em 0 0 0;
  justify-content: center;
  > * {
    margin: 0 1em;
    cursor: pointer;
  }
  > div {
    border-bottom: 1px solid transparent;
    transition: border 125ms ease;
    :hover {
      border-bottom: 1px solid #394561;
    }
  }
  > svg {
    margin: 0 0.5em;
    color: #273043;
    transition: color 125ms ease;
    :hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  color: #5f636e;
  font-size: 14px;
  margin: 5em 0;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <LinkArea>
          <div>Home</div>
          <div>Key Features</div>
          <div>Pricing</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </LinkArea>
        <LinkArea>
          <FaFacebookF size={28} />
          <FaTwitter size={28} />
          <FaSlackHash size={28} />
          <FaGithub size={28} />
        </LinkArea>
        <Copyright>
          Copyright© Arifur Rahman Tushar 2019. All rights reserved
        </Copyright>
      </Container>
    </Wrapper>
  );
}
