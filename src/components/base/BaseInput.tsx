import React from "react";
import { Noop, RefCallBack } from "react-hook-form";
import "./BaseInput.scss";

export interface InputProps {
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  ref?: RefCallBack;
  type?: "text" | "email" | "number" | "checkbox";
  onChange: (...event: any[]) => void;
  error?: string;
  onBlur?: Noop;
}

const BaseInput: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  type = "text",
  ref,
  onBlur,
}) => {
  return (
    <div className="BaseInput">
      <label>{placeholder}</label>

      {type !== "checkbox" ? (
        <input
          className={error ? "Error" : "123"}
          id={name}
          type={type}
          placeholder={placeholder}
          value={value as any}
          onChange={onChange}
          name={name}
          ref={ref}
          onBlur={onBlur}
        />
      ) : (
        <div className="CheckboxContainer">
          <input
            type="checkbox"
            className="CustomCheckbox"
            id={name}
            placeholder={placeholder}
            value={value as any}
            onChange={onChange}
            name={name}
            ref={ref}
            onBlur={onBlur}
          />

          <label htmlFor={name}></label>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default BaseInput;
