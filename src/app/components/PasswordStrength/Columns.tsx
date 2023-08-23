import { useLengthStore } from "@/app/Zustand/state";
import React from "react";
import styled from "styled-components";
import TooWeakBlock from "../Blocks/TooWeakBlock";
import WeakBlock from "../Blocks/WeakBlock";
import MediumBlock from "../Blocks/MediumBlock";
import StrongBlock from "../Blocks/StrongBlock";

const Container = styled.div`
  margin-left: 1rem;
`;

type ColumnsProps = {
  strength: string;
};

const Columns: React.FC<ColumnsProps> = ({ strength }) => {
  return (
    <Container>
      {strength === "too weak" ? (
        <TooWeakBlock />
      ) : strength === "weak" ? (
        <WeakBlock />
      ) : strength === "medium" ? (
        <MediumBlock />
      ) : (
        <StrongBlock />
      )}
    </Container>
  );
};
export default Columns;
