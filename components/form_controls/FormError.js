import React from "react";
import { UICore } from "..";

const FormError = ({ errors, touched, style }) => {
  return errors && touched ? (
    <UICore.Text size="sm" color="var(--red)" style={style}>
      {errors}
    </UICore.Text>
  ) : null;
};

export default FormError;
