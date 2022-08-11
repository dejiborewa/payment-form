import { useLocation } from "react-router-dom";
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

interface Props {
  children: React.ReactNode;
}

const FormHeader = ({ children }: Props) => {
  const location = useLocation();

  const formatPathName = (path: string) => {
    return path.replace("/", "").split("-").join(" "); // remove the initial slash, split the string by "-" to seperate the words, join the words together
  };

  const navItems = ["Personal Info", "Billing Info", "Confirm Payment"];
  return (
    <section className="w-[80%] absolute left-1/2 top-[10%] -translate-x-1/2">
      <header>
        <h1 className="text-blue font-[700] text-[20px]">Complete your Purchase</h1>
      </header>
      <nav>
        <ul className="list-none flex text-[14px] justify-between text-gray border-b border-black mt-6 mb-8">
          {navItems.map((item, index) => (
            <div className="relative" key={index}>
              <li
                key={index}
                className={`${
                  formatPathName(location.pathname) === item.toLowerCase() && `text-orange`
                } font-[700] pb-3`}
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
