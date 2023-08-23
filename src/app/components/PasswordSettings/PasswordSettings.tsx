import { useLengthStore } from "@/app/Zustand/state";
import React, { useState } from "react";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";
import { switcData } from "@/app/data";

const Container = styled.div`
  width: 50rem;

  background-color: hsl(248, 10%, 15%);
  color: hsl(252, 11%, 91%);

  font-size: 1.6rem;

  margin-top: 2rem;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
`;

const LengthCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SmallText = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
`;

const NumberAmount = styled.span`
  font-size: 4rem;
  color: var(--green);
  font-weight: bold;
`;

const RangeCont = styled.div`
  width: 100%;
  margin-top: 1rem;

  position: relative;
`;

const Range = styled.input`
  width: 100%;
  height: 0.8rem;

  opacity: 1;
  outline: none;
  transition: 0.3s;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background: var(--green);
    cursor: pointer;

    position: relative;
  }
`;
interface RangeProps {
  thumbWidth: number;
}

const ColorThumbDiv = styled.div<RangeProps>`
  height: 0.8rem;
  width: ${(props) => `${props.thumbWidth * 5 - 5}%`};
  background: var(--green);

  position: absolute;
  top: 40%;
  left: 0;
`;

const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;

type PasswordSettingsProps = {};

const PasswordSettings: React.FC<PasswordSettingsProps> = () => {
  const [thumbWidth, setThumbWidth] = useState<number>(0);

  const passLength = useLengthStore((state) => state.passLength);
  const setPassLength = useLengthStore((state) => state.setPassLength);

  const changePassLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Increase/decrease password amount
    setPassLength(Number(e.target.value));

    // Increase/decrease thumb length
    setThumbWidth(Number(e.target.value));
  };

  return (
    <Container>
      <LengthCont>
        <SmallText>Character Length</SmallText>
        <NumberAmount>{passLength}</NumberAmount>
      </LengthCont>

      <RangeCont>
        <Range
          type="range"
          min={1}
          max={20}
          step={1}
          value={passLength}
          onChange={changePassLength}
        />
        <ColorThumbDiv thumbWidth={thumbWidth}></ColorThumbDiv>
      </RangeCont>

      <Checkboxes>
        {switcData.map((el) => {
          return <SwitchButton key={el.id} data={el} />;
        })}
      </Checkboxes>
    </Container>
  );
};
export default PasswordSettings;
