type MainHeadingProps = {
  text: string;
  color: string;
};

const MainHeading: React.FC<MainHeadingProps> = ({ text, color }) => {
  const style = `font-main font-bold text-3xl ${color}`;
  return <p className={style}>{text}</p>;
};

export default MainHeading;
