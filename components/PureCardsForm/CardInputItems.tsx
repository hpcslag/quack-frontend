export const CardTextInput = ({
  label,
  name,
  inputDefaultValue,
  input,
  meta,
}: any) => (
  <div className="relative w-full mb-3">
    <label
      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      {label}
    </label>
    <input
      type="text"
      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      defaultValue={inputDefaultValue}
      name={name}
      {...input}
    />
    {meta.touched && meta.error && (
      <span style={{ color: "red" }}>{meta.error}</span>
    )}
  </div>
);
