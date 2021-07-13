import React from "react";
import { CardTextInput } from "./CardInputItems";
import CardSettingsFrame from "./CardSettingsFrame";

export interface AutoFormColumn {
  name: string;
  defaultValue: any;
  label: string;
  type: string;
}

interface Props {
  columns: AutoFormColumn[];
  title: string;
}

const PureCardsAutoForm = ({ columns, title }: Props) => {
  return (
    <CardSettingsFrame name={title}>
      {columns.map((col) => {
        switch (col.type) {
          case "text":
            return (
              <CardTextInput
                name={col.name}
                label={col.label}
                defaultValue={col.defaultValue}
              />
            );
          case "rich":
            break;
        }
      })}
    </CardSettingsFrame>
  );
};

export default PureCardsAutoForm;
