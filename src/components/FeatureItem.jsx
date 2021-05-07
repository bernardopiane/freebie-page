import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "unset")};
  align-items: ${(props) =>
    props.center ? "center" : props.vertical ? "start" : "center"};
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  margin: 1em 0;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageArea = styled.div`
  padding: 1em;
  margin: ${(props) => (props.vertical ? "1em 0" : "1em 1em 1em 0")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : " #f4f4ff")};
  border-radius: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "#242f51")};
`;

const Description = styled.div`
  color: #616368;
  max-width: ${(props) => (props.descpWidth ? props.descpWidth : "400px")};
`;

export default function FeatureItem({
  icon,
  title,
  text,
  color,
  vertical,
  bgColor,
  center,
  maxWidth,
  descpWidth,
}) {
  return (
    <Wrapper vertical={vertical} center={center} maxWidth={maxWidth}>
      <ImageArea vertical={vertical} bgColor={bgColor}>
        <Image fluid src={icon} />
      </ImageArea>
      <DescriptionArea>
        <Title color={color}>{title}</Title>
        <Description descpWidth={descpWidth}>{text}</Description>
      </DescriptionArea>
    </Wrapper>
  );
}
