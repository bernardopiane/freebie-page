import { Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const Style = styled(Button)`
  background-color: #2500f9;
  border-radius: 28.5px;
  color: white;
  padding: 1em 2.5em;
  font-weight: bold;
`;

export default function MyButton({ title }) {
  return <Style>{title}</Style>;
}
