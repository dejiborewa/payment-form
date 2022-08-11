import { ArrowDown } from "../../assets/arrowDown";
import { useEffect, useState } from "react";
import { asterick } from "../../assets/asterick";

interface Props {
  list: string[];
  name: string;
  required: boolean;
}

const Dropdown = ({ list, name, required }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(list[0]);

  const handleClick = (name: string) => {
    setOpenDropdown(false);
    setCurrentSelection(name);
  };

  useEffect(() => {
    const handleDropdownClose = (e: any) => {
      if (!document.getElementById("dropdown")?.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleDropdownClose);

    return () => {
      document.removeEventListener("click", handleDropdownClose);
    };
  });

  return (
    <div className="relative" id="dropdown">
      <span className="flex items-center text-black font-[700] mb-3">
        {name}

        <>{required && asterick}</>
      </span>
      <div
        className="flex items-center justify-between p-2 rounded-[10px] border border-purple bg-white"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {currentSelection}
        <span>{ArrowDown}</span>
      </div>
      {openDropdown && (
        <div className="absolute top-[105%] w-full shadow-md">
          <ul className="list-none border border-purple bg-white rounded-[10px]">
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item)}
                className="py-1 px-2 rounded-[10px] hover:bg-blue hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
