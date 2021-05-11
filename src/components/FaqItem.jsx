import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

import "./FaqItem.css";

const Wrapper = styled.div`
  background-color: #f5f7fa;
  padding: 3em;
  margin: 1em 0;
  font-family: "Poppins", sans-serif;
`;

const Details = styled.details`
  > summary::-webkit-details-marker {
    display: none;
  }
  > summary:first-of-type {
    list-style-type: none;
  }
`;

const Summary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SummaryTitle = styled.div`
  color: #242f51;
  font-size: 20px;
  font-weight: 600;
`;

const DetailsDesc = styled.div`
  padding: 1em 0;
`;

export default function FaqItem({ title, desc }) {
  return (
    <Wrapper>
      <Details>
        <Summary open>
          <SummaryTitle>{title}</SummaryTitle>
          <AiOutlinePlus size={24} color={"#242f51"} />
        </Summary>
        <DetailsDesc>{desc}</DetailsDesc>
      </Details>
    </Wrapper>
  );
}
