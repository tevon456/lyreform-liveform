import React from "react";
import { FormInputs, FormControls } from "..";

const RenderFields = (field, controls_background, controls_foreground) => {
  switch (field.field_type) {
    case "SHORT_ANSWER":
      return <FormInputs.Input {...field} />;
    case "EMAIL":
      return <FormInputs.Input type="email" inputmode="email" {...field} />;
    case "NUMBER":
      return (
        <FormInputs.Input
          type="number"
          inputmode="numeric"
          defaultValue={field.min}
          {...field}
        />
      );
    case "CHECKBOX_GROUP":
      return (
        <FormControls.CheckboxGroup
          {...field}
          baseColor={controls_background}
          checkcolor={controls_foreground}
        />
      );
    case "RADIO_GROUP":
      return (
        <FormControls.RadioGroup
          {...field}
          baseColor={controls_background}
          checkcolor={controls_foreground}
        />
      );
    case "DATE":
      return <FormInputs.Input type="date" {...field} />;
    case "LONG_ANSWER":
      return <FormInputs.TextArea {...field} />;
    case "DROPDOWN_SELECT":
      return <FormInputs.SelectInput {...field} />;
    default:
      return null;
  }
};

export default RenderFields;
