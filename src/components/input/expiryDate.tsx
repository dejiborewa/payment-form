import { useState } from "react";
import { asterick } from "../../assets/asterick";

interface Props {
  name: string;
  label: string;
  type: string;
  details?: boolean;
  detailsText?: string;
  inputmode?: "numeric";
}

const ExpiryDate = ({ name, label, type, inputmode }: Props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <label htmlFor={name} className="block relative my-4">
      <span className="text-black font-[700] flex items-center mb-3">
        {label}
        <>{asterick}</>
      </span>

      <span className="block border border-purple p-2 rounded-[10px] text-center mx-auto">
        {inputValue[0]}
        {inputValue[1]}/{inputValue[2]}
        {inputValue[3]}
      </span>
      <input
        id={name}
        name={name}
        maxLength={4}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        inputMode={inputmode}
        className="absolute top-[50%] opacity-0 w-full p-2 rounded-[10px] border border-purple outline-0"
        required
      />
    </label>
  );
};

export default ExpiryDate;
