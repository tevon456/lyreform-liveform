import React from "react";
import { FormControls } from "..";

const CheckboxGroup = ({ options, ...rest }) => {
  return (
    <div>
      <FormControls.Label>{rest.label}</FormControls.Label>
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
