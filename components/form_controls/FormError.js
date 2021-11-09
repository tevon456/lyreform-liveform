import React from "react";
import { Core } from "..";
const FormError = props => {
  return props.errors && props.touched ? (
    <Core.Text size="sm" color="var(--red)" style={props.style}>
      {props.errors}
    </Core.Text>
  ) : null;
};

export default FormError;
