import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { CardTextInput } from "./CardInputItems";
import CardSettingsFrame from "./CardSettingsFrame";

export interface AutoFormColumn {
  name: string;
  defaultValue: any;
  label: string;
  required?: boolean;
  type:
    | "text"
    | "textarea"
    | "selection"
    | "multi-selection"
    | "radio-checkbox"
    | "multi-checkbox"
    | string;
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
              <form onSubmit={handleSubmit} id={`${id}-form`}>
                {columns.map((col, index) => {
                  switch (col.type) {
                    case "text":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              defaultValue={col.defaultValue}
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
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              defaultValue={col.defaultValue}
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
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              defaultValue={col.defaultValue}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
                      );
                    case "multi-selection":
                      return (
                        <Field
                          key={`${id}-form-field-${index}`}
                          name={col.name}
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              inputDefaultValue={col.defaultValue}
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
                          render={({ input, meta }) => (
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              defaultValue={col.defaultValue}
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
                            <CardTextInput
                              name={col.name}
                              label={col.label}
                              defaultValue={col.defaultValue}
                              input={input}
                              meta={meta}
                            />
                          )}
                        />
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
