import React from "react";
import styled from "styled-components";

const Typography = styled.div`
  color: #616368;
  text-align: ${(props) => (props.center ? "center" : "start")};
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export default function Text({ children, center }) {
  return <Typography center={center}>{children}</Typography>;
}
