import { useEffect, useState } from "react";

export const CardMulticheck = ({
  label,
  name,
  groupId,
  inputDefaultValue,
  optionsValue,
  input,
  meta,
}: any) => {
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    console.log(inputDefaultValue);
    const opValueWithChecked = optionsValue.map((v: any) => ({
      ...v,
      checked: inputDefaultValue
        ? !!inputDefaultValue.find((dv) => dv === v.value)
        : false,
    }));
    setCheckedItems(opValueWithChecked);
    changeFinalFormInput(opValueWithChecked);
  }, []);

  const onCheckItem = (item_id: number) => (isChecked: any) => {
    const newCheckedItems = checkedItems as any;
    newCheckedItems[item_id].checked = isChecked.target.checked;
    setCheckedItems(newCheckedItems);
    changeFinalFormInput(newCheckedItems);
  };

  const changeFinalFormInput = (newCheckedItems: any) => {
    input.onChange(
      newCheckedItems.filter((v: any) => v.checked).map((v: any) => v.value)
    );
  };

  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <fieldset className="my-6">
        {checkedItems?.map((op: any, index: number) => (
          <div className="float-left mr-4" key={`sub-cm-${index}-${name}`}>
            <input
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
              type="checkbox"
              name={`cm-${groupId}`}
              value={op.value}
              checked={op.checked}
              onChange={onCheckItem(index)}
            />
            &nbsp;&nbsp;{op.label}
            <br />
          </div>
        ))}
      </fieldset>
      {meta.touched && meta.error && (
        <span style={{ color: "red" }}>{meta.error}</span>
      )}
    </div>
  );
};
