import React from "react";
import styled from "styled-components";

const Typography = styled.div`
  font-size: 36px;
  color: #242f51;
  position: relative;
  font-weight: bold;
  margin-bottom: 1em 0;
  max-width: 450px;
  text-align: ${(props) => (props.center ? "center" : "start")};
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export default function Title({ children, center }) {
  return <Typography center={center}>{children}</Typography>;
}
