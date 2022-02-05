import React from "react";
import styled from "styled-components";
import Label from "../form_controls/Label";
import chroma from "chroma-js";
import { UICore } from "..";
import { globals } from "./globals";

const StyledInput = styled.input`
  appearance: none;
  background: ${globals.backgroundColor};
  display: block;
  width: ${(props) => props.width || "calc(100% - calc(8px * 2))"};
  padding: 8px 6px;
  min-width: 150px;
  margin-block-start: 0.5em;
  border-radius: ${globals.borderRadius};
  box-shadow: ${globals.shadow};
  border: 0.15em solid
    ${(props) =>
      chroma(props.body_background).luminance() > globals.borderLuminance
        ? "#292929"
        : "#ffffff"};
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
      <UICore.Flex align="center">
        <span>{label || "select dropdown"}</span>
        {props.required ? (
          <>
            <UICore.Space amount="2" />
            <UICore.Badge
              bg="var(--neutral-600)"
              color="#fff"
              aria-label="required"
              data-balloon-pos="right"
              size="xs"
            >
              *
            </UICore.Badge>
          </>
        ) : null}
      </UICore.Flex>

      <StyledInput {...props} data-label={label} data-field_type={field_type} />
    </Label>
  );
};

export default Input;
