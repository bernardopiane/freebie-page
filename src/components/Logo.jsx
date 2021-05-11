import React from "react";
import styled from "styled-components";

const Style = styled.div`
  font-size: 30px;
  font-weight: bold;
  span {
    color: #fcae61;
  }
`;

export default function Logo() {
  return (
    <Style>
      <span>App</span>Lab
    </Style>
  );
}
