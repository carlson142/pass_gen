import React from "react";
import styled from "styled-components";
import { Container } from "./TooWeakBlock";

const StrongContainer = styled.div`
  height: 3rem;
  width: 1rem;

  background-color: var(--green);
`;

type StrongBlockProps = {};

const StrongBlock: React.FC<StrongBlockProps> = () => {
  return (
    <Container>
      <StrongContainer />
      <StrongContainer />
      <StrongContainer />
      <StrongContainer />
    </Container>
  );
};
export default StrongBlock;
