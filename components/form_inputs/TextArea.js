import React from "react";
import styled from "styled-components";
import Label from "../form_controls/Label";
import chroma from "chroma-js";
import { FormControls } from "../form_controls";
import { UICore } from "..";
import { globals } from "./globals";

const TextAreaInput = styled.textarea`
  max-width: calc(100% - calc(12px * 2));
  min-width: calc(100% - calc(12px * 2));
  padding: 8px;
  background: ${(props) =>
    chroma(props.body_background).luminance() > globals.borderLuminance
      ? "#fff"
      : globals.backgroundColor};
  margin-block-start: 0.5em;
  border-radius: ${globals.borderRadius};
  box-shadow: ${globals.shadow};
  min-height: 100px;
  border: 0.15em solid
    ${(props) =>
      chroma(props.body_background).luminance() > globals.borderLuminance
        ? "#292929"
        : "#ffffff"};
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
      <UICore.Flex align="center">
        <FormControls.Label
          as="span"
          css={`
            display: initial;
          `}
        >
          {label}
        </FormControls.Label>
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
      <TextAreaInput
        {...props}
        data-label={label}
        data-field_type={props.field_type}
      />
    </Label>
  );
};

export default TextArea;
