import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/typedHooks";

interface Props {
  children: React.ReactNode;
}

const FormHeader = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = useAppSelector((state) => state.form);

  const formatPathName = (path: string) => {
    return path.replace("/", "").split("-").join(" "); // remove the initial slash, split the string by "-" to seperate the words, join the words together
  };

  const handleClick = (item: string) => {
    if (item === "Personal Info" && form.value.personalInfo.email !== "") {
      navigate("/personal-info");
    }

    if (
      item === "Billing Info" &&
      form.value.cardInfo.cardName !== "" &&
      form.value.cardInfo.cardDetails !== "" &&
      form.value.cardInfo.cvv !== "" &&
      form.value.cardInfo.expiryDate !== ""
    ) {
      navigate("/billing-info");
    }
  };

  const navItems = ["Personal Info", "Billing Info", "Confirm Payment"];
  return (
    <section className="w-[80%] absolute left-1/2 top-[10%] -translate-x-1/2 md:w-[70%] lg:w-[60%] xl:w-[40%]">
      <header>
        <h1 className="text-blue font-[700] text-[20px] md:text-[24px] xl:text-[30px]">
          Complete your Purchase
        </h1>
      </header>
      <nav>
        <ul className="list-none flex text-[14px] justify-between text-gray border-b border-black mt-10 mb-12 md:text-[18px]">
          {navItems.map((item, index) => (
            <div className="relative" key={index}>
              <li
                key={index}
                className={`${
                  formatPathName(location.pathname) === item.toLowerCase() && `text-orange`
                } font-[700] pb-3 cursor-pointer`}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
              <div
                className={`${
                  formatPathName(location.pathname) === item.toLowerCase()
                    ? `bg-orange`
                    : `bg-transparent`
                } h-[8px] absolute rounded-[10px] w-full top-[85%]`}
              ></div>
            </div>
          ))}
        </ul>
      </nav>

      {children}
    </section>
  );
};

export default FormHeader;
// import styled from "styled-components";

// const ListItems = styled.li`
//   :nth-child(1) {
//     padding-right: 0.5em;
//   }

//   :nth-child(2) {
//     padding: 0 0.5em;
//   }

//   :nth-child(3) {
//     padding-right: 0.5em;
//   }
// `;
