import React from "react";
import { FormInputs, FormControls } from "..";

const RenderFields = (
  field,
  body_background,
  controls_background,
  controls_foreground
) => {
  switch (field.field_type) {
    case "SHORT_ANSWER":
      return <FormInputs.Input body_background={body_background} {...field} />;
    case "EMAIL":
      return (
        <FormInputs.Input
          type="email"
          inputmode="email"
          body_background={body_background}
          {...field}
        />
      );
    case "NUMBER":
      return (
        <FormInputs.Input
          type="number"
          inputmode="numeric"
          defaultValue={field.min}
          body_background={body_background}
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
      return (
        <FormInputs.Input
          type="date"
          style={{ minHeight: "38px" }}
          body_background={body_background}
          {...field}
        />
      );
    case "LONG_ANSWER":
      return (
        <FormInputs.TextArea body_background={body_background} {...field} />
      );
    case "DROPDOWN_SELECT":
      return (
        <FormInputs.SelectInput body_background={body_background} {...field} />
      );
    default:
      return null;
  }
};

export default RenderFields;
