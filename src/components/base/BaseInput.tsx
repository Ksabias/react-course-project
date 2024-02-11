import React from "react";
import { Noop, RefCallBack, useController } from "react-hook-form";
import "./BaseInput.scss";

export interface InputProps {
  control?: any;
  name: string;
  value?: string | number | boolean;
  placeholder?: string;
  ref?: RefCallBack;
  type?: "text" | "email" | "number" | "checkbox";
  onChange?: (...event: any[]) => void;
  error?: string;
  onBlur?: Noop;
}

const BaseInput: React.FC<InputProps> = ({
  placeholder,
  type,
  onChange,
  onBlur,
  ...props
}) => {
  const { field } = useController(props);

  return (
    <div className="BaseInput">
      <label htmlFor={field.name}>{placeholder}</label>

      {type !== "checkbox" ? (
        <input id={field.name} type={type} {...field} />
      ) : (
        <div className="CheckboxContainer">
          <input
            id={field.name}
            type="checkbox"
            className="CustomCheckbox"
            {...field}
            onChange={onChange}
          />

          <label id={field.name} htmlFor={field.name}></label>
        </div>
      )}
    </div>
  );
};

export default BaseInput;
