type SubHeadingProps = {
  text: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return (
    <p className="font-main font-semibold text-xl text-subHeading">{text}</p>
  );
};

export default SubHeading;
