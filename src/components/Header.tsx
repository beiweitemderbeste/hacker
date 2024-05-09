import HeaderTitle from "./HeaderTitle";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4 text-center">
      <HeaderTitle text="hacker news" />
    </header>
  );
};

export default Header;
