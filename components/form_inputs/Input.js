import React from "react";
import styled from "styled-components";
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
        <UICore.Badge bg="red" color="#fff">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-alert-triangle"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </UICore.Badge>
      </UICore.Flex>

      <StyledInput {...props} data-label={label} data-field_type={field_type} />
    </Label>
  );
};

export default Input;
