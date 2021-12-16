import Image from "../../assets/demo.jpg";
import Button from "../reusable/Button";
import MainHeading from "../reusable/MainHeading";
import SubHeading from "../reusable/SubHeading";
import { useMediaQuery } from "react-responsive";

const Details = () => (
  <>
    <SubHeading
      text="Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te."
      color="text-dark"
    />
    <p className="text-dark">
      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
      suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae
      te. Ex duo eripuit mentitum.
    </p>
    <Button isPrimary={false} content="Check Recipe" link="/" />
  </>
);

const Featured = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? (
        <div className="flex flex-col items-center justify-center bg-secondary gap-6 px-12 py-16">
          <MainHeading text="Featured Recipe of the Day" color="text-dark" />
          <img src={Image} />
          <Details />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-16 bg-secondary px-32 py-24">
          <div>
            <img src={Image} />
          </div>
          <div className="flex flex-col gap-6 lg:gap-12">
            <MainHeading text="Featured Recipe of the Day" color="text-dark" />
            <Details />
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;
