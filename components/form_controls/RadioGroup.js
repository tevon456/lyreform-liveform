import React from "react";
import { FormControls } from "..";

const RadioGroup = ({ options, ...rest }) => {
  return (
    <div>
      <FormControls.Label>{rest.label}</FormControls.Label>
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
