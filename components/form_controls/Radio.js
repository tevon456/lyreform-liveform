import React from "react";
import styled from "styled-components";

const borderRadius = "25px";
const border = "0.2em";

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 1.7em;
  margin-bottom: 12px;
  margin-block-start: 0.5em;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  border: 2px solid ${(props) => props.baseColor || "var(--secondary-color)"};
  border-radius: 4px;
  padding: 8px 2.5em;
  user-select: none;

  &:hover {
    background-color: ${(props) => props.baseColor + `30`};
  }

  /* Hide the browser's default radio */
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio */
  span {
    position: absolute;
    top: 0.4em;
    left: 0.4em;
    border: ${border} solid
      ${(props) => props.baseColor || "var(--secondary-color)"};
    border-radius: 25px;
    height: 1em;
    width: 1em;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: ${(props) => props.baseColor + "80"};
  }

  input:focus ~ span {
    box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5);
    outline: 0;
  }

  /*disabled */
  input:disabled ~ span {
    border: ${border} solid var(--grey);
    border-radius: ${borderRadius};
  }

  input:disabled ~ span {
    background-color: #ccc;
  }

  /* When the radio is checked, add a blue background */
  & input:checked ~ span {
    background-color: ${(props) =>
      props.disabled
        ? "var(--grey)"
        : props.baseColor || "var(--secondary-color)"};
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  & input:checked ~ span:after {
    display: flex;
  }

  /* Style the checkmark/indicator */
  & span:after {
    left: 26%;
    top: 24%;
    width: 0.5em;
    height: 0.5em;
    background: ${(props) => props.checkcolor || "white"};
    border-radius: 50%;
  }
`;
function Radio(props) {
  return (
    <StyledRadio baseColor="black" {...props}>
      {props.value || "radio"}
      <input
        {...props}
        type="radio"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        tabIndex={0}
        defaultChecked={props.defaultChecked || false}
        data-label={props.parentLabel}
        data-field_type={props.field_type}
      />
      <span />
    </StyledRadio>
  );
}

export default Radio;
