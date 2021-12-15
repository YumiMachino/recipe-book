type MainHeadingProps = {
  text: string;
};

const MainHeading: React.FC<MainHeadingProps> = ({ text }) => {
  return (
    <>
      <p className="font-main font-bold text-3xl text-mainHeading">{text}</p>
    </>
  );
};

export default MainHeading;
