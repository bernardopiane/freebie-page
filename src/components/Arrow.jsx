import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* padding: 1em; */
  height: 50px;
  width: 50px;
  border: 1px solid #eff3f8;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 125ms ease;
  font-size: 18px;
  /* transition: color 125ms ease; */
  :hover {
    background-color: #eff3f8;
    color: #2500f9;
  }
`;

export default function Arrow(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
