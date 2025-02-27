import React from "react";
import { Form, Field } from "react-final-form";
import { CardTextareaInput, CardTextInput } from "./CardInputItems";
import { CardNumberInput } from "./CardNumberInputItems";
import { CardMulticheck } from "./CardMulticheckItems";
import { CardSelection } from "./CardSelectionItem";
import CardSettingsFrame from "./CardSettingsFrame";

export interface mAutoFormColumn {
  name: string;
  defaultValue: any;
  label: string;
  required?: boolean;
  type:
    | "text"
    | "number"
    | "textarea"
    | "selection"
    | "multi-selection"
    | "radio-checkbox"
    | "multi-checkbox"
    | "custom"
    | "linebreak"
    | "header"
    | string;
  customChildren?: (input: any, meta: any) => JSX.Element;
  optionsValue?: { label: string; value: string }[]; // this is for selection, multi-selection, radio-checkbox, multi-checkbox
}

interface Props {
  id: string;
  columns: AutoFormColumn[];
  title: string;
  onSubmit: (values: any) => void;
}

const PureCardsAutoForm = ({ id, columns, title, onSubmit }: Props): any => {
  const onValidation = (values: any) => {
    const errors = {} as any;
    for (const col of columns) {
      if (col.required && !values[col.name]) {
        errors[col.name] = "Required";
      }
    }
    return errors;
  };

  // https://github.com/final-form/react-final-form/blob/master/docs/faq.md#how-can-i-trigger-a-submit-from-outside-my-form
  const onClick = (elementId: string) => (event: any) => {
    event.preventDefault();
    const form = document.getElementById(elementId);
    if (form) {
      form.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <>
      <CardSettingsFrame name={title} onClick={onClick(`${id}-form`)}>
        <Form
          onSubmit={onSubmit}
          validate={onValidation}
          render={({ handleSubmit }: any) => (
            <div>
              <form onSubmit={(event) => handleSubmit(event)} id={`${id}-form`}>
                {columns.map((col, index) => {
                  switch (col.type) {
                    case "text":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );
                    case "number":
                      return (
                        <Field
                          type="number"
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardNumberInput
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );
                    case "textarea":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardTextareaInput
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );

                    case "selection":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardSelection
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                              optionsValue={col.optionsValue}
                            />
                          )}
                        />
                      );
                    case "multi-selection":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );
                    case "radio-checkbox":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          defaultValue={col.defaultValue}
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );
                    case "multi-checkbox":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          render={({ input, meta }) => (
                            <CardMulticheck
                              groupId={`${id}-form-field-${index}-checkbox`}
                              name={col.name}
                              label={col.label}
                              inputDefaultValue={col.defaultValue}
                              input={input}
                              meta={meta}
                              optionsValue={col.optionsValue}
                            />
                          )}
                        />
                      );
                    case "custom":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          render={({ input, meta }) => (
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                {col.label}
                              </label>
                              {col.customChildren!(input, meta)}
                            </div>
                          )}
                        />
                      );
                    case "linebreak":
                      return (
                        <div key={`${id}-form-field-${index}`}>
                          <br />
                          <hr className="mt-6 border-b-1 border-blueGray-300" />
                          <br />
                        </div>
                      );
                    case "header":
                      return (
                        <h6
                          className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                          key={`${id}-form-field-${index}`}
                        >
                          {col.label}
                        </h6>
                      );
                  }
                })}
              </form>
            </div>
          )}
        />
      </CardSettingsFrame>
    </>
  );
};

export default PureCardsAutoForm;
