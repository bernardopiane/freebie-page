import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import BillIcon from "../images/bill.png";
import NetworkIcon from "../images/network.png";
import BadgeIcon from "../images/badge.png";
import Title from "./Title";
import Text from "./Text";

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 3em 0;
`;

const DetailsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  border-right: 1px solid #b9b9b8;
  height: 10em;
  margin: 3em;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ItemArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 2em;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default function Jackpot() {
  return (
    <Wrapper>
      <Container>
        <DetailsArea>
          <Title>
            Smart jackpots that you may love this anytime & anywhere
          </Title>
          <Divider />
          <Text>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </Text>
        </DetailsArea>
        <ItemArea>
          <FeatureItem
            vertical={true}
            icon={BillIcon}
            title="Automatic Payouts"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            color="#f55767"
          />
          <FeatureItem
            vertical={true}
            icon={NetworkIcon}
            title="Network Effect"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            color="#2563ff"
          />
          <FeatureItem
            vertical={true}
            icon={BadgeIcon}
            title="Bigger Rewards Method"
            text="Get your blood tests delivered at home collect a sample from the news your blood tests."
            color="#40975f"
          />
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
