import { useState } from "react";
import { asterick } from "../../assets/asterick";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  details?: boolean;
  detailsText?: string;
  inputmode?: "numeric";
}

const Input = ({
  name,
  label,
  placeholder,
  required,
  type,
  details,
  detailsText,
  inputmode,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: any) {
    setInputValue(e.target.value);

    if (e.target.name === "cardDetails") {
      e.target.maxLength = 23;
      if (
        e.target.value.length === 5 ||
        e.target.value.length === 11 ||
        e.target.value.length === 17
      ) {
        setInputValue(e.target.value + " ");
      }
    }

    if (e.target.name === "cvv") {
      e.target.maxLength = 3;
    }
  }

  return (
    <label htmlFor={name} className="block my-4">
      <span className="text-black font-[700] flex items-center mb-3">
        {label}
        <>{required && asterick}</>
      </span>
      {details && (
        <span className="block text-lightPurple text-[14px] w-full my-2">{detailsText}</span>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        required={required}
        inputMode={inputmode}
        className="block w-full p-2 rounded-[10px] border border-purple outline-0"
      />
    </label>
  );
};

export default Input;
