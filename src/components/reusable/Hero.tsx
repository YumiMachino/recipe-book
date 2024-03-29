import { useState } from "react";
import Image from "../../assets/background/bgd-top.png";
import Button from "./Button";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Hero: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="flex items-center text-center justify-center h-full">
      <img src={Image} width="100%" height="auto" className="hidden sm:block" />
      <div className="sm:absolute mx-0 sm:mx-10 md:mx-16 lg:mx-52 xl:mx-96">
        <div className="hidden sm:grid sm:gap-4 lg:gap-10">
          <MainHeading
            text="Lorem ipsum dolor sit amet eam quas malorum accusam"
            color="text-mainHeading"
          />
          <SubHeading
            text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te."
            color="text-subHeading"
          />
        </div>
        <div className="flex justify-between sm:w-full mt-12 sm:mt-3 lg:mt-12 xl:mt-16 ">
          <input
            className="grow w-full px-3 mr-2 sm:mr-5 shadow-md"
            type="text"
            placeholder="Search by keyword..."
            onChange={(e) => setSearchWord(e.target.value)}
          ></input>
          <Button isPrimary={true} content="Search" link="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
