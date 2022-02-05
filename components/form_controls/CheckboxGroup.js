import React from "react";
import { FormControls } from "..";
import { UICore } from "..";
import "styled-components/macro";

const CheckboxGroup = ({ options, ...rest }) => {
  return (
    <div>
      <UICore.Flex align="center">
        <FormControls.Label
          as="span"
          css={`
            display: initial;
          `}
        >
          {rest.label}
        </FormControls.Label>
        {rest?.required ? (
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
      {options.map((items) => (
        <FormControls.Checkbox
          key={Math.random()}
          parentLabel={rest.label}
          {...rest}
          {...items}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
