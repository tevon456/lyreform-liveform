import pristine from "pristinejs";
import { FormHelper } from "./formHelper";

export default function handleSubmit(event, callback, error) {
  event.preventDefault();
  let defaultConfig = {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "has-danger",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-help",
  };
  let form = document.querySelector("form", defaultConfig);
  let validator = new pristine(form);
  let data = FormHelper.formResponseToObject(form.elements);

  if (validator.validate()) {
    callback(data);
  } else {
    error(validator.getErrors());
  }
}
