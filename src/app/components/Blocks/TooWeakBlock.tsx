import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const TooWeakContainer = styled.div`
  height: 3rem;
  width: 1rem;

  background-color: rgb(247, 75, 75);
`;

export const EmptyContainer = styled.div`
  height: 3rem;
  width: 1rem;

  border: 2px solid white;
`;

type TooWeakBlockProps = {};

const TooWeakBlock: React.FC<TooWeakBlockProps> = () => {
  return (
    <Container>
      <TooWeakContainer />
      <EmptyContainer />
      <EmptyContainer />
      <EmptyContainer />
    </Container>
  );
};
export default TooWeakBlock;
