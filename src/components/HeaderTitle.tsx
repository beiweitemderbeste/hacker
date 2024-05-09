interface HeaderTitleProps {
  text: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ text }) => {
  return <h1 className="text-3xl font-bold text-white">{text}</h1>;
};

export default HeaderTitle;
