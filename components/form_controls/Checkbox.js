import React from "react";
import styled from "styled-components";

const borderRadius = "4px";
const border = "0.2em";

function Checkbox(props) {
  const StyledCheckbox = styled.label`
    display: block;
    position: relative;
    padding-left: 1.7em;
    margin-block-start: 0.5em;
    margin-bottom: 12px;
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
    font-size: 1em;
    user-select: none;
    border: 2px solid ${props.baseColor || "var(--neutral-400)"};
    border-radius: 4px;
    padding: 8px 2.5em;

    &:hover {
      background-color: ${props.baseColor + `30`};
    }

    /* Hide the browser's default checkbox */
    & input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    span {
      position: absolute;
      top: 0.4em;
      left: 0.4em;
      border: ${border} solid ${props.baseColor || "var(--neutral-400)"};
      border-radius: ${borderRadius};
      height: 1em;
      width: 1em;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ span {
      background-color: ${props.baseColor + "80"};
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

    /* When the checkbox is checked, add a blue background */
    & input:checked ~ span {
      background-color: ${props.disabled
        ? "var(--neutral-350)"
        : props.baseColor || "var(--neutral-400)"};
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
      left: 30%;
      top: 10%;
      width: 0.3em;
      height: 0.5em;
      border: solid ${props.checkColor || "white"};
      border-width: 0 0.15em 0.15em 0;
      transform: rotate(45deg);
    }
  `;
  return (
    <StyledCheckbox baseColor="black">
      {props.value || "checkbox"}
      <input
        {...props}
        type="checkbox"
        name={props.name}
        disabled={props.disabled}
        value={props.value}
        tabIndex={0}
        defaultChecked={props.checked || false}
        data-label={props.parentLabel}
        data-fieldType={props.fieldType}
      />
      <span />
    </StyledCheckbox>
  );
}

export default Checkbox;
