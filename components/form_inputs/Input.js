import React from "react";
import styled from "styled-components";
import Label from "../form_controls/Label";
import { globals } from "./globals";

const StyledInput = styled.input`
  appearance: none;
  display: block;
  width: ${(props) => props.width || "calc(100% - calc(12px*2))"};
  padding: 6px;
  min-width: 150px;
  margin-block-start: 0.5em;
  border-radius: ${globals.borderRadius};
  box-shadow: ${globals.shadow};
  border: ${globals.border};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "initial")};
  font-size: ${(props) => (props.small ? "12px" : "  16px")};

  &:disabled {
    background-color: #ccc;
  }

  &:focus {
    box-shadow: ${globals.shadowHover};
  }
`;

const Input = ({ label, field_type, ...props }) => {
  return (
    <Label small={props.small} className="form-group">
      {label || "text"}
      {props.required ? " *" : null}

      <StyledInput {...props} data-label={label} data-field_type={field_type} />
    </Label>
  );
};

export default Input;
