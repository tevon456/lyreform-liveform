import React from "react";
import { FormControls } from "..";
import { UICore } from "..";
import "styled-components/macro";

const RadioGroup = ({ options, ...rest }) => {
  return (
    <div>
      <UICore.Flex align="center" className="form-group">
        <FormControls.Label
          as="span"
          css={`
            display: initial;
          `}
        >
          {rest.label}
        </FormControls.Label>
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
        {options.map((items) => (
          <FormControls.Radio
            key={Math.random()}
            parentLabel={rest.label}
            {...rest}
            {...items}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
