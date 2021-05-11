import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FaqItem from "./FaqItem";
import Text from "./Text";
import Title from "./Title";

const Wrapper = styled.div`
  padding: 3em 0;
`;

const ItemArea = styled.div`
  margin: 2em 0;
`;

export default function FAQ() {
  return (
    <Wrapper>
      <Container>
        <Title center>Frequently asked questions</Title>
        <Text center>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </Text>
        <ItemArea>
          <FaqItem
            title={"How to contact with riders emergency?"}
            desc={
              "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
            }
          />
          <FaqItem
            title={"App installation failed, how to update system information?"}
            desc={
              "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
            }
          />
          <FaqItem
            title={"Website reponse taking time, how to improve?"}
            desc={
              "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
            }
          />
          <FaqItem
            title={"New update fixed all bug and issues"}
            desc={
              "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
            }
          />
          <FaqItem
            title={"How to contact with riders emergency?"}
            desc={
              "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
            }
          />
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
