import { LayoutBg } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LayoutBg></LayoutBg>
      {children}
    </>
  );
};

export default Layout;
