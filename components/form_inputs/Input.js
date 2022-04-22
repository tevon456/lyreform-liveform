import React from "react";
import styled from "styled-components/macro";
import Label from "../form_controls/Label";
import chroma from "chroma-js";
import { UICore } from "..";
import { globals } from "./globals";

const StyledInput = styled.input`
  appearance: none;
  background: ${(props) =>
    chroma(props.body_background).luminance() > globals.borderLuminance
      ? "#fff"
      : globals.backgroundColor};
  display: block;
  width: ${(props) => props.width || "calc(100% - calc(8px * 2))"};
  padding: 8px 6px;
  min-width: 150px;
  min-height: 1.2em;
  margin-block-start: 0.5em;
  color: var(--text-dark);
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
        <UICore.Space amount="2" />
        {props.required ? (
          <>
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
        <UICore.Badge
          bg="red"
          className="error-badge"
          color="#fff"
          css={`
            visibility: hidden;
          `}
        >
          Error
        </UICore.Badge>
      </UICore.Flex>

      <StyledInput {...props} data-label={label} data-field_type={field_type} />
    </Label>
  );
};

export default Input;
