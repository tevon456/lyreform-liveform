import React from "react";
import styled from "styled-components";
import Label from "../form_controls/Label";
import { globals } from "./globals";

const TextAreaInput = styled.textarea`
  max-width: calc(100% - calc(12px * 2));
  min-width: calc(100% - calc(12px * 2));
  padding: 8px;
  margin-block-start: 0.5em;
  border-radius: ${globals.borderRadius};
  box-shadow: ${globals.shadow};
  min-height: 100px;
  border: ${globals.border};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "initial")};
  font-size: 1em;
  font-family: var(--font-primary);

  &:disabled {
    background-color: #ccc;
  }

  &:focus {
    box-shadow: ${globals.shadowHover};
  }
`;

const TextArea = ({ label, ...props }) => {
  return (
    <Label className="form-group">
      <br />
      {label || "text"}
      {props.required ? " *" : null}
      <TextAreaInput
        {...props}
        data-label={label}
        data-fieldType={props.fieldType}
      />
    </Label>
  );
};

export default TextArea;
