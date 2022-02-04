import React from "react";
import { FormControls } from "..";
import { UICore } from "..";

const CheckboxGroup = ({ options, ...rest }) => {
  return (
    <div>
      <UICore.Flex align="center">
        <FormControls.Label>{rest.label}</FormControls.Label>
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
