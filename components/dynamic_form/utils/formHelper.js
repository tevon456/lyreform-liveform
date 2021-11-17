export class FormHelper {
  /**
   * Checks that an element has a non-empty `name` and `value` property.
   * @param  {Element} element  the element to check
   * @return {Bool}             true if the element is an input, false if not
   */
  static isValidElement = (element) => {
    // return element.name && element.value;
    return element.name;
  };

  /**
   * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the value should be added, false if not
   */
  static isValidValue = (element) => {
    return !["checkbox", "radio"].includes(element.type) || element.checked;
  };

  /**
   * Checks if an input is a checkbox, because checkboxes allow multiple values.
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the element is a checkbox, false if not
   */
  static isCheckbox = (element) => element.type === "checkbox";

  /**
   * Checks if an input is a `select` with the `multiple` attribute.
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the element is a multiselect, false if not
   */
  static isMultiSelect = (element) => element.options && element.multiple;

  /**
   * Retrieves the selected options from a multi-select as an array.
   * @param  {HTMLOptionsCollection} options  the options for the select
   * @return {Array}                          an array of selected option values
   */
  static getSelectValues = (options) =>
    [].reduce.call(
      options,
      (values, option) => {
        return option.selected ? values.concat(option.value) : values;
      },
      []
    );

  /**
   * Retrieves input data from a form and returns it as a JSON object.
   * @param  {HTMLFormControlsCollection} elements  the form elements
   * @return {Object}                               form data as an object literal
   */
  static formResponseToObject = (elements) =>
    [].reduce.call(
      elements,
      (data, element) => {
        if (
          FormHelper.isValidElement(element) &&
          FormHelper.isValidValue(element)
        ) {
          /*
           * Some fields allow for more than one value, so we need to check if this
           * is one of those fields and, if so, store the values as an array.
           */

          if (FormHelper.isCheckbox(element)) {
            // checkboxes
            data[element.name] = {
              value: (data[element.name]?.value || []).concat(element.value),
              field_type: element.dataset.field_type,
              label: element.dataset.label,
            };
          } else if (FormHelper.isMultiSelect(element)) {
            // selects
            data[element.name] = {
              value: FormHelper.getSelectValues(element),
              field_type: element.dataset.field_type,
              label: element.dataset.label,
            };
          } else {
            // every other field
            data[element.name] = {
              value: element.value,
              field_type: element.dataset.field_type,
              label: element.dataset.label,
            };
          }
        }
        return data;
      },
      {}
    );
}
