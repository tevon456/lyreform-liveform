import React from "react";
import styled from "styled-components";
import Label from "../form_controls/Label";
import { UICore } from "..";
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
      <TextAreaInput
        {...props}
        data-label={label}
        data-field_type={props.field_type}
      />
    </Label>
  );
};

export default TextArea;
