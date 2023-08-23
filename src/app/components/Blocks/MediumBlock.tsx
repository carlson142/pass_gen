import React from "react";
import styled from "styled-components";
import { Container, EmptyContainer } from "./TooWeakBlock";

const MediumContainer = styled.div`
  height: 3rem;
  width: 1rem;

  background-color: rgb(248, 203, 99);
`;

type MediumBlockProps = {};

const MediumBlock: React.FC<MediumBlockProps> = () => {
  return (
    <Container>
      <MediumContainer />
      <MediumContainer />
      <MediumContainer />
      <EmptyContainer />
    </Container>
  );
};
export default MediumBlock;
