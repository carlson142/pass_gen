"use client";

import styled from "styled-components";
import PasswordBoard from "./components/PasswordBoard/PasswordBoard";
import PasswordSettings from "./components/PasswordSettings/PasswordSettings";
import PasswordStrength from "./components/PasswordStrength/Strength";
import PasswordHeading from "./components/PasswordHeading/PasswordHeading";

import { ToastContainer } from "react-toastify";

const Container = styled.main`
  height: 100vh;

  background: var(--bg);

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 2rem 0;
`;

export default function Home() {
  return (
    <Container>
      <ToastContainer style={{ fontSize: "2rem" }} />
      <PasswordHeading />
      <PasswordBoard />
      <PasswordSettings />
      <PasswordStrength />
    </Container>
  );
}
