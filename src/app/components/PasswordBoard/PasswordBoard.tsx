import React, { useState } from "react";
import styled from "styled-components";
import { Copy } from "@styled-icons/boxicons-regular";
import { useFinalPassword, useLengthStore } from "@/app/Zustand/state";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  color: hsl(252, 11%, 91%);

  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  background-color: hsl(248, 10%, 15%);

  padding: 2rem;

  width: 50rem;
  border-radius: 1rem;
`;

interface PCProps {
  passwordLength: number;
}

const PasswordContainer = styled.div<PCProps>`
  font-size: 2rem;

  color: ${(props) =>
    props.passwordLength === 0 ? "rgb(247, 75, 75)" : "var(--green)"};
`;

const CopyIcon = styled(Copy)`
  height: 2rem;
  width: 2rem;
`;

const CopyButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
  color: var(--green);

  transition: all 0.2s ease-in;

  :hover {
    color: white;
  }
`;

type PasswordBoardProps = {};

const PasswordBoard: React.FC<PasswordBoardProps> = () => {
  const passwordLength = useLengthStore((state) => state.passLength);
  const finalPassword = useFinalPassword((state) => state.finalPassword);

  const [copy, setCopy] = useState<string>("");

  const handleClick = (finalPassword: string): void => {
    navigator.clipboard
      .writeText(finalPassword)
      .then(() => setCopy(finalPassword));
    toast("Copied to the clipboard!");
  };

  return (
    <Container>
      <PasswordContainer passwordLength={passwordLength}>
        {finalPassword.length === 0 ? "Select options" : finalPassword}
      </PasswordContainer>

      <CopyButton
        disabled={finalPassword.length === 0}
        onClick={() => handleClick(finalPassword)}
      >
        <CopyIcon />
      </CopyButton>
    </Container>
  );
};
export default PasswordBoard;
