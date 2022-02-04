import React from "react";
import { FormControls } from "..";
import { UICore } from "..";
import "styled-components/macro";

const RadioGroup = ({ options, ...rest }) => {
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
      </UICore.Flex>
      {options.map((items) => (
        <FormControls.Radio
          key={Math.random()}
          parentLabel={rest.label}
          {...rest}
          {...items}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
