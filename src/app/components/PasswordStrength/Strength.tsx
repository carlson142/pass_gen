import { useLengthStore } from "@/app/Zustand/state";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Columns from "./Columns";

const Container = styled.div`
  width: 50rem;

  background-color: hsl(248, 10%, 15%);
  color: hsl(252, 11%, 91%);

  font-size: 2rem;
  text-transform: uppercase;

  margin-top: 2rem;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

type PasswordStrengthProps = {};

const PasswordStrength: React.FC<PasswordStrengthProps> = () => {
  const [strength, setStrengths] = useState<string>("too weak");

  const passwordLength = useLengthStore((state) => state.passLength);

  useEffect(() => {
    if (passwordLength <= 5) setStrengths("too weak");
    if (passwordLength > 5 && passwordLength <= 10) setStrengths("weak");
    if (passwordLength > 10 && passwordLength <= 15) setStrengths("medium");
    if (passwordLength > 15) setStrengths("strong");
  }, [passwordLength]);

  return (
    <Container>
      <SubContainer>Strength</SubContainer>
      <SubContainer>
        {strength}
        <SubContainer>
          <Columns strength={strength} />
        </SubContainer>
      </SubContainer>
    </Container>
  );
};
export default PasswordStrength;
