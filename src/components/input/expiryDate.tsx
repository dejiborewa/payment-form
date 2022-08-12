import { asterick } from "../../assets/asterick";

interface Props {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  details?: boolean;
  detailsText?: string;
  inputmode?: "numeric";
}

const ExpiryDate = ({ name, label, type, value, onChange, inputmode }: Props) => {
  return (
    <label htmlFor={name} className="block relative my-4">
      <span className="text-black font-[700] flex items-center mb-3">
        {label}
        <>{asterick}</>
      </span>

      <span className="block border border-purple p-2 rounded-[10px] text-center mx-auto">
        {value[0]}
        {value[1]}/{value[2]}
        {value[3]}
      </span>
      <input
        id={name}
        name={name}
        maxLength={4}
        type={type}
        value={value}
        onChange={onChange}
        inputMode={inputmode}
        className="absolute top-[50%] opacity-0 w-full p-2 rounded-[10px] border border-purple outline-0"
        required
      />
    </label>
  );
};

export default ExpiryDate;
