import React from "react";
import { Radio, Label } from ".";
import { UICore } from "..";
import "styled-components/macro";

const RadioGroup = ({ options, ...rest }) => {
  return (
    <div className="form-group">
      <UICore.Flex align="center">
        <Label
          as="span"
          css={`
            display: initial;
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
      <div>
        {options.map((items, index) => (
          <Radio
            key={items.value}
            parentLabel={rest.label}
            required={rest?.required}
            {...rest}
            {...items}
            id={`${rest.id}-radio-${index}`}
            data-pristine-required-message="Please check one of the following options below:"
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
