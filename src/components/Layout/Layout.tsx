import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar
        links={[
          {
            name: "About",
            url: "/",
          },
          {
            name: "Contact",
            url: "/",
          },
          {
            name: "Services",
            url: "/",
          },
        ]}
      />
      {children}
    </>
  );
};
