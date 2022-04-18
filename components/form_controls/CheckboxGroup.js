import React from "react";
import { Label, Checkbox } from ".";
import { UICore } from "..";
import "styled-components/macro";

const CheckboxGroup = ({ options, ...rest }) => {
  return (
    <div className="form-group">
      <UICore.Flex align="center">
        <Label
          as="span"
          css={`
            display: initial;
            margin-right: 4px;
          `}
        >
          {rest.label}
        </Label>
        <UICore.Space amount="2" />
        {rest?.required ? (
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
      {options.map((items, index) => (
        <Checkbox
          key={Math.random()}
          parentLabel={rest.label}
          {...rest}
          {...items}
          id={`${rest.id}-${index}`}
          data-pristine-required-message="Please check one or more of the following options below:"
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
