import React, { useState } from "react";
import styled from "styled-components";
import { SmallText } from "./PasswordSettings";
import { useCheckboxState } from "@/app/Zustand/state";
import { switchDataProps } from "@/app/data";

const CheckBoxCont = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2rem;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 3rem;
  width: 6rem;

  margin-right: 2rem;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  height: 0;
  width: 0;
`;

interface SpanProps {
  toggle: boolean;
}

const Span = styled.span<SpanProps>`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: var(--bg);
  border-radius: 2rem;

  &::after {
    content: "";
    display: block;

    position: absolute;
    left: ${(props) => (props.toggle === false ? "0.5rem" : "3.3rem")};
    top: 50%;
    transform: translate(0, -50%);

    height: 2.2rem;
    width: 2.2rem;
    background-color: ${(props) =>
      props.toggle === false ? "white" : "var(--green)"};
    border-radius: 50%;

    transition: all 0.2s ease-in;
  }
`;

type SwitchButtonProps = {
  data: switchDataProps;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({ data }) => {
  // Switch button
  const [toggle, setToggle] = useState<boolean>(false);

  //   Work with options
  const checkboxState = useCheckboxState((state) => state.checkboxStates);
  const setCheckboxState = useCheckboxState((state) => state.setCheckboxStates);
  const deleteCheckboxState = useCheckboxState(
    (state) => state.deleteCheckboxState
  );

  return (
    <CheckBoxCont>
      <Label>
        <Input />
        <Span
          toggle={toggle}
          onClick={() => {
            setToggle(!toggle);
            !toggle ? setCheckboxState(data) : deleteCheckboxState(data.id);
          }}
        />
      </Label>
      <SmallText>{data.name}</SmallText>
    </CheckBoxCont>
  );
};
export default SwitchButton;
