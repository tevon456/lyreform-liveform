import React from "react";
import styled from "styled-components";
import { globals } from "./globals";
import { Label } from "../form_controls";
import { UICore } from "..";

const StyledSelect = styled.select`
  display: block;
  width: ${(props) => props.width || "calc(100%)"};
  width: ${(props) => props.width || "calc(100% - calc(4px * 0))"};
  padding: 8px 6px;
  min-width: 150px;
  margin-block-start: 0.5em;
  border-radius: ${globals.borderRadius};
  border: ${globals.border};
  box-shadow: ${globals.shadow};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "initial")};
  font-size: ${(props) => (props.small ? "12px" : "  16px")};

  &:disabled {
    background-color: #ccc;
  }

  &:focus {
    box-shadow: ${globals.shadowHover};
  }
`;

const SelectInput = ({ disabled, ...props }) => {
  return (
    <Label small={props.small} className="form-group">
      {props.label || "select dropdown"}
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
            r
          </UICore.Badge>
        </>
      ) : null}
      <StyledSelect
        {...props}
        data-label={props.label}
        data-field_type={props.field_type}
      >
        <option selected disabled>
          select...
        </option>
        {props.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.value}
          </option>
        ))}
      </StyledSelect>
    </Label>
  );
};

export default SelectInput;
