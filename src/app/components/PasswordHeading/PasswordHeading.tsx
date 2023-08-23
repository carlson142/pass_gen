import React, { useState } from "react";
import styled from "styled-components";

import {
  useCheckboxState,
  useFinalPassword,
  useLengthStore,
} from "@/app/Zustand/state";

import {
  switchDataProps,
  lowerCaseAlphabet,
  upperCaseAlphabet,
  numbers,
  symbols,
} from "@/app/data";
import { shuffle } from "@/app/helpers";

const Container = styled.div`
  width: 50rem;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: hsl(251, 9%, 53%);
`;

const CustonButton = styled.button`
  padding: 0 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  background-color: var(--green);
  border: 2px solid var(--green);

  transition: all 0.2s ease-in;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

type PasswordHeadingProps = {};

const PasswordHeading: React.FC<PasswordHeadingProps> = () => {
  const passwordLength = useLengthStore((state) => state.passLength);
  const checkboxState = useCheckboxState((state) => state.checkboxStates);

  const setFinalPassword = useFinalPassword((state) => state.setFinalPassword);

  type optionProps = {
    passwordLength: number;
    checkboxState: switchDataProps[];
  };

  // TODO: CREATING PASSWORD

  const createPassword = (options: optionProps): void => {
    const { passwordLength, checkboxState } = options;

    // NOTE: Base cases
    if (passwordLength === 0) setFinalPassword("Can`t be zero-length!!");
    if (checkboxState.length === 0) setFinalPassword("Choose options!");

    // NOTE: Case 1 - When only one(1) option select
    if (checkboxState.length === 1) {
      checkboxState.map((e, i) => {
        if (e.id === 1 || e.id === 2 || e.id === 3 || e.id === 4) {
          const result = shuffle(e.arrayForShuffle)
            .join("")
            .slice(0, passwordLength);
          setFinalPassword(result);
        }
      });
    }

    // Case 2 - When few options selected
    if (checkboxState.length > 1) {
      const commonArray: string[] = [];

      checkboxState.map((el, i) => {
        commonArray.push(...el.arrayForShuffle);
      });

      const result = shuffle(commonArray).join("").slice(0, passwordLength);
      setFinalPassword(result);
    }
  };

  return (
    <Container>
      <Heading>Password Generator</Heading>
      <CustonButton
        onClick={() => createPassword({ passwordLength, checkboxState })}
      >
        Generate
      </CustonButton>
    </Container>
  );
};
export default PasswordHeading;
