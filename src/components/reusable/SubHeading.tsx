type SubHeadingProps = {
  text: string;
  color: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({ text, color }) => {
  const style = `font-main font-semibold text-xl ${color}`;
  return <p className={style}>{text}</p>;
};

export default SubHeading;
