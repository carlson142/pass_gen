import React from "react";
import { Container, EmptyContainer } from "./TooWeakBlock";
import { styled } from "styled-components";

const WeakContainer = styled.div`
  height: 3rem;
  width: 1rem;

  background-color: rgb(251, 122, 86);
`;

type WeakBlockProps = {};

const WeakBlock: React.FC<WeakBlockProps> = () => {
  return (
    <Container>
      <WeakContainer />
      <WeakContainer />
      <EmptyContainer />
      <EmptyContainer />
    </Container>
  );
};
export default WeakBlock;
